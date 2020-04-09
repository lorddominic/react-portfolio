import React from "react"
import data from "./Data.json"
import Projectdetail from "./Projectdetail"
class Project extends React.Component {
    state = {
        myProjects: data
    }
    render() {
        console.log(data);
        return (
            <div className="myProjects">
                <h1>My Previous Works</h1>
                {this.state.myProjects.map((item,key) => (
                    <Projectdetail project = {item} key={key} />

                )
                )}
            </div>
        )
    }
}

export default Project;