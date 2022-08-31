import React from 'react';
import "./Team.css"
import axios from 'axios';

function Team(){
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day, month, year].join('-');
    }
    window.onload = () =>{
        axios.get('https://bambloo.herokuapp.com/report')
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
    return(
        <div className='Team'>
            <form className='report-form' onSubmit= {(e) => {
                const content = document.getElementById('report').value;
                const current = new Date();
                const date = new Date(current.getFullYear(), current.getMonth(), current.getDate());

                console.log();
                console.log(date);
                axios.post('https://bambloo.herokuapp.com/report', {
                    report: content,
                    date:formatDate(date.toDateString())
                })
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
                e.preventDefault()
            }}>
                {/* <label for='report'>Phản hồi</label><br/> */}
                <textarea type="text" id="report"></textarea>
                <input type="submit" value="Gửi phản hồi"></input>
            </form>
        </div>
    );
}
export default Team;