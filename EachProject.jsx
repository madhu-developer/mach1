import React from 'react'
import './EachProject.css';
import { useParams } from 'react-router-dom';


export const EachProject = (props) => {
    const { project } = useParams();
    
  return (
    <div className="project-section">
    <div className="each-project-container">
        <div className="each-project-section">
            <h3>{project}</h3>
        <div className="projects-details-section">
        <div className="each-project-section">
        <div className="each-detail">
            <p>Client</p>
            <h5>Amdocs</h5>
        </div>
        <div className="each-detail">
            <p>Project</p>
            <h5>Aramis</h5>
        </div>
        <div className="each-detail">
            <p>Project Type</p>
            <h5>REGULAR</h5>
        </div>
        <div className="each-detail">
            <p>Start Date</p>
            <h5>17 Jan 24</h5>
        </div>
        <div className="each-detail">
            <p>Invoice Type</p>
            <h5>UOM</h5>
        </div>
        </div>
        <div className="each-project-section">
        <div className="each-detail">
            <p>Manager</p>
            <h5>DWANTULA MOUNIKA</h5>
        </div>
        <div className="each-detail">
            <p>PMO</p>
            <h5>MUNAWAR</h5>
        </div>
        <div className="each-detail">
            <p>Onsite Manager</p>
            <h5>MAHESH</h5>
        </div>
        <div className="each-detail">
            <p>Onsite PMO</p>
            <h5>SANDEEP REDDY BODDAPATI</h5>
        </div>
        <div className="each-detail">
            <p>Delivery Manager</p>
            <h5>SANDEEP REDDY BODDAPATI</h5>
        </div>
        </div>
        </div>
        <div className="teams-section">
            <div className="team-count-addteam-section">
            <h4>Team - <span style={{"color":"orange"}}>69</span></h4>
            <button className="add-team-button">+ Add Team</button>
            </div>
        <div className="teams-buttons">
            <button>Excel</button>
            <button>Pagelength</button>
        </div>
        <table className="teams-list">
            <tr>
                <th>#</th>
                <th>Employee Id</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Employee Id</td>
                <td>Name</td>
                <td><button className="delete-button">Delete</button></td>
            </tr>
            <tr>
                <td>1</td>
                <td>Employee Id</td>
                <td>Name</td>
                <td><button className="delete-button">Delete</button></td>
            </tr>
            <tr>
                <td>1</td>
                <td>Employee Id</td>
                <td>Name</td>
                <td><button className="delete-button">Delete</button></td>
            </tr>
            <tr>
                <td>1</td>
                <td>Employee Id</td>
                <td>Name</td>
                <td><button className="delete-button">Delete</button></td>
            </tr>
            <tr>
                <td>1</td>
                <td>Employee Id</td>
                <td>Name</td>
                <td><button className="delete-button">Delete</button></td>
            </tr>
        </table>
        </div>
        </div>
        </div>
    </div>
  )
}
