import './Home.css'
import { GrSend } from 'react-icons/gr';
import {BsFillPersonFill} from 'react-icons/bs';
import { IconContext } from "react-icons"
const dbString = 'https://bambloo.herokuapp.com/'
function Home(){
    window.onload = () => {
        
        // const {Client} = require('pg');
        // const client = new Client({
        //     connectionString: dbString,
        //     ssl: {
        //         rejectUnauthorized: false
        //     }
        // });
        // client.connect();
        // client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
        //     if (err) throw err;
        //     for (let row of res.rows) {
        //       console.log(JSON.stringify(row));
        //     }
        //     client.end();
        //   });
    }
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
