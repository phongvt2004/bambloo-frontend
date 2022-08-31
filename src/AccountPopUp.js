import React, { useEffect ,useRef} from 'react';
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import "./AccountPopUp.css"
function AccountPopUp(props){
    const [pageSelected, changePage] = useState("login");
    const [colorbtn, changecolor] = useState({fs :"white", sc: "#61B6FF"})

    const handleClick = (e) => {
        changePage(e.target.id)
        const tmp = colorbtn.fs
        changecolor({
            fs : colorbtn.sc,
            sc : tmp
        })
    }
    const refOne = useRef(null);
  
    useEffect(() => {
        const handleClickOutside = (e) =>{
           if ((refOne.current !== null)){
                if (!refOne.current.contains(e.target)) props.setTrigger(false);
           }
        }
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        }
    }, [])
    

    
    return (props.trigger) ? (
    <div className="PopUp" ref={refOne}>
        <button onClick={() => {
            props.setLoggedinTrigger(true)
            props.setTrigger(false);
        }}>close</button>
        {props.children}
        <div className="header">
            <button id="login" onClick={handleClick} style = {{"background" : colorbtn.fs, "color" : colorbtn.sc}}>Đăng nhập</button>
            <button id="register" onClick={handleClick} style = {{"background" : colorbtn.sc, "color" : colorbtn.fs}}>Đăng kí</button>
        </div>
        <div className="forms">
            {pageSelected === "login" ? <Login/> : <Register/>}

        </div>
    </div>
) : "" ;}
export default AccountPopUp;