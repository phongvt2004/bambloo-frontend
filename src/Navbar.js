import logo  from './resource/logo.png'
// import { Link } from 'react-router-dom';
import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";


class Header extends Component {
    render() {
        // const path = this.props.location.pathname.slice(1);
        return ( 
            < nav className = "navbar" >
                <img className = "logo" alt = "Bambloo Logo"src = { logo } >
                </img> 
                {/* <h1 className = "part" alt = "web-part" id = "web-part" > { path } </h1>  */}
                <div className = "links" >
                    <a href = "/" > Trang chủ </a> 
                    <a href = "/Trend" > Xu hướng </a> 
                    <a href = "/Course" > Khóa học </a> 
                    <a href = "/Team" > Đội ngũ </a>
                    <div class="searchBox">
                        <input class="searchInput"type="text" name="" placeholder="Search"/>
                        <button class="searchButton" href="#">
                            <i class="material-icons">
                                search
                            </i>    
                        </button>
                    </div>
                    <a href='/Login' className="accBtn">Đăng Nhập</a> 
                </div> 
                
            </nav>
        );
    }
}
export default Header;