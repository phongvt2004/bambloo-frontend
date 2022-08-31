import React from 'react';
import {getDownloadURL, getStorage, ref} from 'firebase/storage'
import axios from 'axios';

function Course(){
    const storage = getStorage();
    const imgUrl = ref(storage,'logo.png');
    window.onload = () => {
        console.log(imgUrl);
        let imgurl = ""
        getDownloadURL(ref(storage,'logo.png'))
        .then((url) => {
            console.log(url);
            imgurl = url;
            document.getElementById('img').setAttribute('src', url);
        });
        axios.get("https://bambloo.herokuapp.com/courses/get/courses/admin", {
            params:{
                tag: "sample",
                status:"all"
            }
        })
        .then(function(respone){
            console.log(respone);
        })
        .catch(function(errors){ 
            console.log(errors)
        }); 
    }
    return (
        <div className='Course'>
            <h2>Course:</h2>
            <img id = 'img' style={{"width": "100px", "height": "100px"}}></img>
        </div>
    );
}
export default Course;