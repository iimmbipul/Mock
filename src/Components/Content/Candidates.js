import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import Card from './../Card/Card';
//import AddCandidate from './../Modal/AddCandidate';
let mapStateToProps = (store)=>{
 return {
     candidates:store.candidates
 }
}
let mapDispatchToProps = (dispatch)=>{

}
export default connect(mapStateToProps,mapDispatchToProps)(class Candidates extends Component {
    render() {
        return (
            <Fragment>
                
                <div>
                
                    {this.props.candidates && this.props.candidates.map((item,key)=>{
                        return(
                            <Card key={key} name = {item.name}/>
                        )
                    })}

                </div>
            </Fragment>
        )
    }
})

