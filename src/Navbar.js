import logo  from './resource/logo.png'
import React, { Component } from "react";
import reducer from './reducers'
Header.defaultProps = {
    email : "null"
}
function Header(props) {
        // const path = this.props.location.pathname.slice(1); 
   
    const LoginButton = <a href='/Login' className="accBtn"></a>;
    return ( 
        <nav className = "navbar" >
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
                {props.email !== "null" ?<a href='/Login' className="accBtn">Đăng Nhập</a>:<a>{props.fullname} </a>}
            </div> 
            
        </nav>
    );
}

export default Header;