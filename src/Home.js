import background1 from "./resource/background1.png"
import background2 from "./resource/background2.png"
import background3 from "./resource/background3.png"
import background4 from "./resource/background4.png"
import logo from "./resource/logo.png"
import './Home.css'
const second = 1000
function Home(){
    document.getElementById('p2').src = background1;
    setInterval(() => {
        console.log('background changed')
        const urlList = [background1,background2,background3,background4]  
        const bg = urlList[Math.floor(Math.random() * urlList.length)]
        document.getElementById('p2').src = bg;
    },5 * second)
    return(
        <div className="Home">
            <div className="homecontent">
                <div className="left">
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
                            <div class="icon" id="i1"></div>
                            <p class="pnum">Number</p>
                            <p class="pchar">title</p>
                        </div>
                    </div>
                    <div className="box" id="box2">
                        <div class="boxContent" >
                            <div class="icon" id="i2">
                                <i class="material-icons">near_me</i>
                            </div>
                            <p class="pnum">Number</p>
                            <p class="pchar">title</p>
                        </div>
                    </div>
                    <div className="box" id="box3">
                        <div class="boxContent">
                            <div class="icon" id="i3">                                
                                <i class="material-icons">person</i>
                            </div>
                            <p class="pnum">Number</p>
                            <p class="pchar">title</p>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className="background">
                <div id="p1">
                    {/* <img src={background1}alt="img" /> */}
                </div>
                <img id="p2"  alt="img" />
            </div>
        </div>
    );
}
export default Home;
