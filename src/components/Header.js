import React from "react";
import style from "../styles/header.module.scss";

export default class Header extends React.Component {

    state = {
        title: "Insert title here"
    }

    render() {
        return (<>
                <div className={style.header}>
                <span className={style.title}>{this.props.title}</span><span className={style.time}>{this.props.time}</span>
                </div>
            </>
        );
    }
};