let setReject = (state,id)=>{
    console.log(id);
    let obj = state.liveJobs.find(x => x.id == id);
    let index = state.liveJobs.indexOf(obj);
    state.rejectedJobs.push(obj)
    state.liveJobs.splice(index, 1)
    return state;
   }
   export default setReject;