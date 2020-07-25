import React from "react";
import "../src/styles/index.module.scss";
import Layout from "../src/components/Layout";
import Header from "../src/components/header";

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

    // intitialElement = () => <h1 className={Styles.time}>The current time is: {this.state.time}</h1>

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
            <Layout>
                <Header title="My Title" time={""}/>
                {/* {this.intitialElement()} */}
                <h1 className="">The current time is: {this.state.time}</h1>
            </Layout>
        )
    }
};
