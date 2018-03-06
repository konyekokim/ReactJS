import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{
  //note function are called outside the render function
  constructor(){
    super();
    this.state = {
      homeLink: "Home"
    };
  }
  onGreet(){
    alert("Hello Child?!!");
  }
  onChangeLinkName(newName){
    this.setState({
      homeLink: newName
    });
  }
  render(){
    //creating an object user
    var user ={
      name: "Favorites",
      hobbies: ["Basketball","Movies","Eating"],
      love : "Ayodele"
    };
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home 
                name={"Konye"} 
                initialAge={21} 
                user={user} 
                greet={this.onGreet}
                //this particular line is the same as () => this.onChangeListener()
                changeLink={this.onChangeLinkName.bind(this)}
                initialLinkName={this.state.homeLink}>
              <p>This is a paragraph</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));  