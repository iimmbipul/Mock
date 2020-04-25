import {withRouter} from 'react-router';
import React, { Component } from 'react';
import {connect} from 'react-redux';


let mapStateToProps = (store)=>{
    return {
        acceptedJobs:store.acceptedJobs
        
    }
   }
let mapDispatchToProps = (dispatch)=>{
   return {
       accept:dispatch,
       reject:dispatch,
       jobId:dispatch
   }
   }
export default withRouter(connect(mapStateToProps,mapDispatchToProps)( class Action extends Component {


    handleAccept = (id)=>{
        console.log("this.props",this.props);
        console.log("here",id);
        let action = {
            type:"accept",
            payload:id
        }
        this.props.accept(action);
    }
    handleReject = (id)=>{
        let action = {
            type:"reject",
            payload:id
        }
        this.props.reject(action);

    }
    handleId = (id)=>{
        let action = {
            type:"id",
            payload:id
        }
        this.props.jobId(action);

    }
    addCandidates = ()=>{

    }
    render() {
        return (
            <div>
                {this.props.match.path === "/live-jobs" && 
                    <div className="action">

                        <button onClick={()=>{this.handleAccept(this.props.id)}}>Accept</button>
                        <button onClick={()=>{this.handleReject(this.props.id)}}>Reject</button>
                    </div>
                }
                {this.props.match.path === "/accepted-jobs" && 
                    <div className="action">

                        <button onClick={()=>{this.handleId(this.props.id)}} >Add Candidates</button>
                        
                    </div>
                }
                {this.props.match.path === "/rejected-jobs" && 
                    <div className="action">

                        <span>Rejected</span>
                    </div>
                }
            </div>
        )
    }
}))
