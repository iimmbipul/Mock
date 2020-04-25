import React, { Component } from 'react'
import {connect} from 'react-redux';
import Card from './../Card/Card';

let mapStateToProps = (store)=>{
    return {
        liveJobs:store.liveJobs
    }
   }
let mapDispatchToProps = (dispatch)=>{
   
   }
export default connect(mapStateToProps,mapDispatchToProps)(class Livejobs extends Component {
    render() {
        return (
            <div>
                {this.props.liveJobs && this.props.liveJobs.map((item,key)=>{
                    let body = [{
                        
                    }]
                    return(
                        <Card
                        topic="jobs" 
                        key={key} 
                        item={item}
                        />
                    )
                })}
            </div>
        )
    }
})
