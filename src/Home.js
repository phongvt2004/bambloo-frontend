import background1 from "./resource/background1.png"
// import background1 from "./resource/test.jpg"
import background2 from "./resource/background2.png"
import background3 from "./resource/background3.png"
import background4 from "./resource/background4.png"
import logo from "./resource/logo.png"
import './Home.css'
import { GrSend } from 'react-icons/gr';
import {BsFillPersonFill} from 'react-icons/bs';
import { IconContext } from "react-icons"

const second = 1000
function Home(){
    // const backgroundImg = [background1, background2, background3, background4]
    // const buttonclr = ["linear-gradient(278.76deg, #017AF1 10.43%, #01F4FE 106.11%)",
    //                 "linear-gradient(278.76deg, #30A010 10.43%, #81D364 106.11%)",
    //                 "linear-gradient(278.76deg, #398491 10.43%, #78B8C9 106.11%)",
    //                 "linear-gradient(278.76deg, #EFBB6A 10.43%, #FFF9D8 106.11%)"]
    // let i = 0
    // setInterval(() => {
    //     document.getElementById("BackgroundImg").src = backgroundImg[Math.trunc(i)]
    //     document.getElementById("btn1").style.background     = buttonclr[Math.trunc(i)]
    //     if (i < 3) {
    //         i++
    //     } else {
    //         i = 0
    //     }
    //     console.log(i+"")
    //   }, 5*second);
    return(
        <div className="Home">
            <IconContext.Provider value={{size:"15px", className:"icon", color:"#ffffff"}}>
            <div className="homecontent">
                `<div className="left">
                    <div class  ="topContent">
                        <h3>HỌC TRỰC TUYẾN</h3>
                        <h1>Giáo dục nền tảng số</h1>
                        <p style={{"font-size" : "16px", "color":"rgba(188, 180, 180, 1)"}}>Nền tảng số cung cấp các khóa học trực tuyến đa lĩnh vực và ngành nghề dành riêng cho học sinh Việt Nam</p>
                    </div>
                    <div className="homeBtn">
                        <button id="btn1">Tham gia</button>
                        <button id="btn2">Tìm hiểu</button>
                    </div>
                    <span id="footContent">Được tin dùng bởi trên 15.000 học sinh sinh viên cả nước</span>
                </div>
                <div id="right">
                    <div className="box" id="box1">
                        <div class="boxContent">
                            <div class="icon-wrapper" id="i1"></div>
                            <p class="pnum">Number</p>
                            <p class="pchar">title</p>
                        </div>
                    </div>
                    <div className="box" id="box2">
                        <div class="boxContent" >
                            <div class="icon-wrapper" id="i2">
                                {/* <i class="material-icons">near_me</i> */}
                                <GrSend className="icon" />
                            </div>
                            <p class="pnum">Number</p>
                            <p class="pchar">title</p>
                        </div>
                    </div>
                    <div className="box" id="box3">
                        <div class="boxContent">
                            <div class="icon-wrapper" id="i3">                                
                                {/* <i class="material-icons">person</i> */}
                                <BsFillPersonFill className="icon"/>
                            </div>
                            <p class="pnum">Number</p>
                            <p class="pchar">title</p>
                        </div>
                    </div>
                  
                </div>
            </div>
            </IconContext.Provider>
        </div>
    );
}
export default Home;
