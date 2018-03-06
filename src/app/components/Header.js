import React from "react";
//cos stateless component i.e component that dinnor have state. you get
export const Header= (props) => {
   return(
        <div className="navbar navbar-default">
            <div className="container">
               <div className="navbar-header">
                   <ul className="nav navbar-nav">
                        <li><a href="#">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
         </div>
        );  
};