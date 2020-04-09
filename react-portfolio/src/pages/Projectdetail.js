import React from "react"
import data from "./Data.json"
import Project from "./Projects"
import {Card} from 'react-bootstrap'
function Projectdetail(props) {
    return (
        <Card>
            <Card.Title>{props.project.name}</Card.Title>
            <h4><a href={props.project.url} target="_blank">GitHub Repo</a></h4>
            <h4><a href={props.project.deployment} target="_blank">Deployment</a></h4>
            <p>{props.project.description}</p>
            <img src={props.project.imgsrc} alt={props.project.name} width="400" height="400" />
        </Card>
    )
}

export default Projectdetail;