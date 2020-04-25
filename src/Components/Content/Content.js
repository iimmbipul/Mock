import React, { Component, Fragment } from 'react';
import { Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Candidates from './Candidates';
import LiveJobs from './Livejobs';
import AcceptedJobs from './Acceptedjobs';
import RejectedJobs from './Rejectedjobs';
export default class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className="home">
                    <div className="upperSpaceHome">
hi
                    </div>
                    <div className="homeContent">
                    
                        <Switch>
                            <Route path="/" exact component={Dashboard}/>
                            <Route path="/candidates" exact component={Candidates}/>
                            <Route path="/live-jobs" exact component={LiveJobs}/>
                            <Route path="/accepted-jobs" exact component={AcceptedJobs} />
                            <Route path="/rejected-jobs" exact component= {RejectedJobs}/>
                         

                        </Switch>
                       
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}



    
    


