import React,{useState,useEffect} from 'react'
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

//Mock data
const url = "https://mocki.io/v1/69edfbd1-6286-4173-a3c1-8e17ff2ad5ad";

export const Projects = () => {
  const [projectData,setProjectData] = useState([]);
  const [searchProject,setSearchProject] = useState("");
  const [filteredData,setFilteredData] = useState([]);
//   const [ascendingOrderData,setAscendingOrderData] = useState([]);
//   const [descendingOrderData,setDescendingOrderData]=useState([])

  useEffect(() => {
    const fetchedProjectData = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setProjectData(result);
        } catch (err) {
            console.log(err);
        }
    };
    fetchedProjectData();
}, []);

useEffect(() => {
    const searchProjects = () => {
        const searchTerm = searchProject.toLowerCase();
        const fiteredProjects = projectData.filter(
            (eachObj) =>
                eachObj.project.toLowerCase().includes(searchTerm)
        );
        setFilteredData(fiteredProjects);
    };

    searchProjects();
}, [projectData, searchProject]);

  return (
    <div className="projects-container">
    <div className="project-and-add-project-section">
    <div classNamme="projects-button-section">
        <h1>Projects</h1>
    <div className="projects-buttons">
        <button type="button">Excel</button>
        <button type="button">Print</button>
        <button type="button">Column Visibility</button>
        <button type="button">Page Length</button>
    </div>
    </div>
    <button className="add-project-button">+ Add Project</button>
    </div>
    <div className="search-input-section">
      <label htmlFor="search">Search:</label>
      <input type="search" placeholder="Project Name" onChange={(e) => setSearchProject(e.target.value)}/>
    </div>
    <div className="projects-list">
        <table style={{"width":"85vw","margin":"12px"}}>
          <tr>
            <th>#</th>
            <th>Client<FontAwesomeIcon icon={faArrowDown} style={{"marginLeft":"10px"}}/><FontAwesomeIcon icon={faArrowUp} /></th>
            <th>Project<FontAwesomeIcon icon={faArrowDown} style={{"marginLeft":"10px"}}/><FontAwesomeIcon icon={faArrowUp} /></th>
            <th>Start Date</th>
            <th>Invoice</th>
            <th>Files</th>
            <th>Action</th>
          </tr>
          {searchProject===""? projectData.map((eachProject)=>{
            const {id,client,project,startDate,invoice,files} = eachProject
            return (
          <tr style={{"textAlign":"center"}} key={id}>
          <td>{id}</td>
          <td>{client}</td>
          <td><Link to={`/projects/${project}`} className="each-project">{project}</Link></td>
          <td>{startDate}</td>
          <td>{invoice}</td>
          <td>{files}</td>
          <td><button className="hide-button">Hide</button></td>
        </tr>
            )
          }):
            filteredData.map((eachProject)=>{
                const {id,client,project,startDate,invoice,files} = eachProject
              return (
            <tr style={{"textAlign":"center"}} key={id}>
            <td>{id}</td>
            <td>{client}</td>
            <td>{project}</td>
            <td>{startDate}</td>
            <td>{invoice}</td>
            <td>{files}</td>
            <td><button className="hide-button">Hide</button></td>
          </tr>
              )
            })}
        </table>
      </div>
    </div>
  )
}
