import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';


export default class SideNav extends Component {
    render() {
        
        
        return (
            <aside className="sideNav">
               <div className="hidden"></div>
               <div className="B">
                   <div className="tab">Navigation</div>
                      <nav>
                        <NavLink
                          exact
                          activeClassName="navActive"
                          className="navbarLink"
                          to="/"
                          >
                          Dashboard
                        </NavLink>
                        <NavLink
                          exact
                          activeClassName="navActive"
                          className="navbarLink"
                          to="/candidates"
                          >
                            Candidates
                        </NavLink>
                      </nav>
               </div>
               <div className="B">
                   <div className="tab">Jobs</div>
                      <nav>
                        <NavLink
                          exact
                          activeClassName="navActive"
                          className="navbarLink"
                          to="/live-jobs"
                          >
                          Live Jobs
                        </NavLink>
                        <NavLink
                          exact
                          activeClassName="navActive"
                          className="navbarLink"
                          to="/accepted-jobs"
                          >
                            Accepted Jobs
                        </NavLink>
                        <NavLink
                          exact
                          activeClassName="navActive"
                          className="navbarLink"
                          to="/rejected-jobs"
                          >
                            Rejected Jobs
                        </NavLink>
                      </nav>
               </div>
               <div className="B">
                   <div className="tab">Support</div>
                      <nav>
                        <NavLink
                          exact
                          activeClassName="navActive"
                          className="navbarLink"
                          to="/help-Desk"
                          >
                          Help Desk
                        </NavLink>
                        <NavLink
                          exact
                          activeClassName="navActive"
                          className="navbarLink"
                          to="/tutorial"
                          >
                            Tutorial
                        </NavLink>
                        <NavLink
                          exact
                          activeClassName="navActive"
                          className="navbarLink"
                          to="/feedback"
                          >
                            Feedback
                        </NavLink>
                      </nav>
               </div>
                   
                   
                     
                       
               
            </aside>
        )
    }
}

