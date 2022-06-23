import background1 from "./resource/background1.png"
import logo from "./resource/logo.png"
import './Home.css'
function Home(){
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
                    <div className="box">
                        <div class="boxIcon">
                            <i>NOTHING</i>
                            <p>Number</p>
                            <p>title</p>
                        </div>
                    </div>
                    <div className="box">
                        <div class="boxIcon">
                            <i class="material-icons">person</i>
                            <p>Number</p>
                            <p>title</p>
                        </div>
                    </div>
                    <div className="box">
                        <div class="boxIcon">
                            <i class="material-icons">near_me</i>
                            <p>Number</p>
                            <p>title</p>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className="background">
                <div id="p1">
                    {/* <img src={background1}alt="img" /> */}
                </div>
                <img id="p2" src={background1}alt="img" />
            </div>
        </div>
    );
}
export default Home;
