import logo  from './resource/logo.png'
import { Link } from 'react-router-dom';
import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";


class Header extends Component {
    render() {
        const path = this.props.location.pathname.slice(1);
        return ( 
            < nav className = "navbar" >
                <img className = "logo" alt = "Bambloo Logo"src = { logo } >
                </img> 
                <h1 className = "part" alt = "web-part" id = "web-part" > { path } </h1> 
                <div className = "links" >
                    <Link to = "/" > Trang chủ </Link> 
                    <Link to = "/Trend" > Xu hướng </Link> 
                    <Link to = "/Course" > Khóa học </Link> 
                    <Link to = "/Team" > Đội ngũ </Link> 
                </div> 
                <div class="searchBox">
                    <input class="searchInput"type="text" name="" placeholder="Search"/>
                    <button class="searchButton" href="#">
                        <i class="material-icons">
                            search
                        </i>
                    </button>
                </div>
                <button className="accBtn">Đăng Kí</button>
                <button className="accBtn">Đăng Nhập</button>
            </nav>
        );
    }
}
export default withRouter(Header);