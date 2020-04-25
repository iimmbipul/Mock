import React, { Component } from 'react'
import {connect} from 'react-redux';
import Card from './../Card/Card';

let mapStateToProps = (store)=>{
    return {
        rejectedJobs:store.rejectedJobs
    }
   }
let mapDispatchToProps = (dispatch)=>{
   
   }
export default connect(mapStateToProps,mapDispatchToProps)(class Rejectedjobs extends Component {
    render() {
        return (
            <div>
                {this.props.rejectedJobs && this.props.rejectedJobs.map((item,key)=>{
                    
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
