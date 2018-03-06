import React from "react";
import PropTypes from "prop-types";
//I am just using this sturvs to test random rubbish
export class Home extends React.Component{
    constructor(props){
        super();
        //this changes the state of the component
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 3
            });
        },3000);
    }
    onMakeMeOlder(){
        this.setState({
            age: this.state.age + 3,
            status: this.state.status + 2
        });
    }
    onChangeMyStatus(){
        this.setState({
            status: this.state.status + 6
        });
    }
    onChangeLink(){
        this.props.changeLink(this.state.homeLink)
    }
    //this function handles change of event in the form field
    onHandleChange(event){
        this.setState({
            //this makes whatever you type out show in the input field
            homeLink: event.target.value
        });
    }
    render(){
        var text = "Atinuke the baddest"
        return(
            <div>
                <p>This is a new Component</p>
                {text}
                <p>My name is {this.props.name} and I am {this.state.age} years old</p>
                <p>Status is {this.state.status}</p>
                <p>This object contains a group of my {this.props.user.name} stuff</p>
                <div>
                    <h4>{this.props.user.name}</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <h3>{this.props.name}'s new Love interest is {this.props.user.love}</h3>
                <hr/>
                {this.props.children}
                <hr/>
                <button onClick={() => this.onMakeMeOlder()} className="btn  btn-primary">Make me older please!</button>
                <p></p>
                <button onClick={() => this.onChangeMyStatus()} className="btn btn-primary">Change My status Binsh!!</button> 
                <p></p>
                <button onClick={this.props.greet} className="btn btn-primary">Greet from Child</button>   
                <hr/>
                {/* this is to do two way binding */}
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link Name!</button> 
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number, 
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};