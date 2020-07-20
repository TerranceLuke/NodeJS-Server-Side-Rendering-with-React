import React from "react";

export default class Index extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
    }

    tick = () => {
        this.setState(() => {
            return(
                {
                    time: new Date().toLocaleString()
                }
            );
        });
    }

    intitialElement = () => <h1 className="time" style={{color: "orange"}}>The current time is: {this.state.time}</h1>

    componentDidMount()
    {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.interval);
    }   

    render() {
        return(
            <>
                {this.intitialElement()}
            </>
        )
    }
};
