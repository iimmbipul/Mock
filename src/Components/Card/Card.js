import React, { Component,Fragment } from 'react'
import {withRouter} from 'react-router';
import Action from './../Action/Action';
export default withRouter(class Card extends Component {
    render() {
        console.log("card",this.props)
        return (
            <Fragment>
                <div className="card">
                {/* For Candidates    */}
                {this.props.name &&<span>{this.props.name}</span>} 

                 {/* For Live Jobs */}
                {this.props.topic && 
                    <Fragment>
                        <div>{this.props.item.candidates}</div>
                        <div>{this.props.item.companyName}</div>
                        <div>{this.props.item.department}</div>
                        <div>{this.props.item.exp}</div>
                        <div>{this.props.item.id}</div>
                        <div>{this.props.item.jobTitle}</div>
                        <div>{this.props.item.location}</div>
                        <div>{this.props.item.salary}</div>
                        <div>{this.props.item.status}</div>
                        <div>{this.props.item.type}</div>
                        <Action id={this.props.item.id}/>
                    </Fragment>
                }
                    
                </div> 
            </Fragment>
        )
    }
})
