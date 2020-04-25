import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';

let mapStateToProps = (store)=>{
    return {
        modal:store.modal,
        name:store.candidates,
        id:store.jobId
    }
   }
let mapDispatchToProps = (dispatch)=>{
   return {
       addCand:dispatch
   }
   }

export default connect(mapStateToProps,mapDispatchToProps)( class AddCandidate extends Component {
     state = {
         value:[]
     }
    handleChange = (e)=>{
        console.log(e.target.options);
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        this.setState({value: value});
        console.log(value);
    }
    handleAdd = (name)=>{
        let action = {
            type:"add_candidates",
            payload:{
                name:name
                
            }
        }
        this.props.addCand(action)
    }
    render() {
        console.log("ok");
        return (
            <Fragment>
                {this.props.modal && 
                    <div className="modal">
                        <select multiple onChange = {(e)=>{this.handleChange(e)}}>
                            Choose
                            {this.props.name && this.props.name.map((item,key)=>{
                                return(
                                <option key={key} value={item.name}>{item.name}</option>
                                )
                            })}
                        </select>
                        <button onClick={()=>{this.handleAdd(this.state.value)}}>Add</button>
                    </div>
                }
            </Fragment>
        )
    }
})
