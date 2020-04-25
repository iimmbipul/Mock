import { createStore } from "redux";
import setAccept from './Actions/accept';
import setReject from './Actions/reject';



let initialState = {
    candidates:[
        {name:"Bipul"},
        {name:"Raj"},
        {name:"Rahul"},
        {name:"Ashok"},
        {name:"Arnav"}
    ],
    liveJobs:[
        {
            jobTitle:"Frontend",
            companyName:"Abc",
            department:"software",
            location:"delhi",
            id:"12345",
            exp:"7-10",
            type:"Full-time",
            candidates:3,
            salary:"25-30",
            status:"pending",
            candidateName:[]
            
        },
        {
            jobTitle:"Frontend",
            companyName:"Abc",
            department:"software",
            location:"delhi",
            id:"12346",
            exp:"7-10",
            type:"Full-time",
            candidates:3,
            salary:"25-30",
            status:"pending",
            candidateName:[]
            
        },
        {
            jobTitle:"Frontend",
            companyName:"Abc",
            department:"software",
            location:"delhi",
            id:"12347",
            exp:"7-10",
            type:"Full-time",
            candidates:3,
            salary:"25-30",
            status:"pending",
            candidateName:[]
            
        },
        {
            jobTitle:"Frontend",
            companyName:"Abc",
            department:"software",
            location:"delhi",
            id:"12348",
            exp:"7-10",
            type:"Full-time",
            candidates:3,
            salary:"25-30",
            status:"pending",
            candidateName:[]
            
        },
        {
            jobTitle:"Frontend",
            companyName:"Abc",
            department:"software",
            location:"delhi",
            id:"12349",
            exp:"7-10",
            type:"Full-time",
            candidates:3,
            salary:"25-30",
            status:"pending",
            candidateName:[]
            
        },
    ],
    acceptedJobs:[
        {
            jobTitle:"Frontend",
            companyName:"Abc",
            department:"software",
            location:"delhi",
            id:"12350",
            exp:"7-10",
            type:"Full-time",
            candidates:3,
            salary:"25-30",
            status:"true",
            candidateName:[]
            
        }
    ],
    rejectedJobs:[],
    jobId:"",
    modal:false

}

function appReducerFunction(state = initialState, action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    // eslint-disable-next-line default-case
    switch(action.type){
        case "accept":
            var newState = setAccept(stateCopy,action.payload)
            return newState;
        case "reject":
            var newState = setReject(stateCopy,action.payload)
            return newState;
        case "id":
            stateCopy.jobId = action.payload
            stateCopy.modal = true
            return stateCopy;
        
        case "add_candidates":
            console.log("okok",action.payload);
            stateCopy.acceptedJobs.candidateName = action.payload.name
            stateCopy.modal = false
            console.log(stateCopy);
            return stateCopy;
        case "default":
            return state;
        
    }
    return state;

}

export default createStore(appReducerFunction);