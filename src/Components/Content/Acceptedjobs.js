import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import Card from './../Card/Card';
import Modal from './../Modal/AddCandidate';

let mapStateToProps = (store)=>{
    return {
        acceptedJobs:store.acceptedJobs
    }
   }
let mapDispatchToProps = (dispatch)=>{
   
   }
export default connect(mapStateToProps,mapDispatchToProps)(class Acceptedjobs extends Component {
    render() {
       
        return (
            <Fragment>
                <Modal/>
            <div>
                {this.props.acceptedJobs && this.props.acceptedJobs.map((item,key)=>{
                     console.log("item here",item)
                    return(
                        <Card
                        topic="jobs" 
                        key={key} 
                        item={item}
                        />
                    )
                })}
            </div>
            </Fragment>
        )
    }
})
