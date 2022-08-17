import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "./Register.css"

function Register(){
    let history = useHistory();
    const [userinfo,dataUpdate] = useState({
        email: "",
        password: "",
        fullname:"",
        birthday:"",
        gender:""
    })
    return(
        <div className="Register">
            <form className='loginForm' onSubmit={(e) => {
                console.log(userinfo)
                axios.post("https://bambloo.herokuapp.com/auth/register",{
                    email: userinfo.email,
                    password: userinfo.password,
                    confirmPassword: userinfo.password,
                    fullname: userinfo.fullname,
                    gender: userinfo.gender,
                    birthday: userinfo.birthday
                }).then(function (response) {
                    console.log(response)
                }).catch(function(error){
                    console.log(error)
                })
                // history.push("/")
                e.preventDefault()
            }}>
                <label>Email: </label><br/>
                <input type="email"  placeholder='Nhập email' onChange={(e) =>{
                    dataUpdate({
                        ...userinfo,
                        email : e.target.value
                    })
                }}/>
                <span ></span><br/>
                <label>Mật khẩu: </label><br/>
                <input type="password" placeholder='Nhập mật khẩu' onChange={(e) =>{
                    dataUpdate({
                        ...userinfo,
                        password : e.target.value
                    })
                }}/>
                <span id="border2"></span><br/>
                <label>Nhập lại mật khẩu: </label><br/>
                <input id="ie" type="password"  placeholder='Nhập lại mật khẩu'/>
                <span id="b1"></span><br/>
                <label>Tên người dùng: </label><br/>
                <input  type="text"  placeholder='Tên người dùng' onChange={(e) => {
                    dataUpdate({
                        ...userinfo,
                        fullname : e.target.value
                    })
                }}/>
                <span id="b1"></span><br/>
                <label>Ngày sinh: </label><br/>
                <input  type="date" onChange={(e) =>{dataUpdate({
                        ...userinfo,
                        birthday : e.target.value
                    })}}/>
                <span id="b1"></span><br/>
                <label>Giới tính: </label><br/>
                <select name="gender" onChange={(e) => {
                    dataUpdate({
                        ...userinfo,
                        gender : e.target.value
                    })
                }}>
                    <option value="none" selected>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                </select >
                <span id="b1"></span><br/>
                <button type="submit" className='loginCfrm'>Đăng kí</button>
        </form>
        </div>
    );
}
export default Register;