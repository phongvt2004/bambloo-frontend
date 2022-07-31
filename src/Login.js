import './Login.css'
import FacebookLogin from 'react-facebook-login';
import {FaFacebookF} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import jwt_decode from 'jwt-decode'

function Login(){
    const responseFacebook = (response) => {
        console.log(response);
        console.log("fb logged in ");
        
    }
    const google = window.google;
    function handleCredentialResponse(response) {
        const decoded = jwt_decode(response.credential)
        console.log("Encoded JWT ID token: " + response.credential);
    
        console.log(response.select_by);
        for (var key in response)
            console.log(key);
        console.log("gg logged in ");
   
      }
    window.onload = function () {
        google.accounts.id.initialize({
            client_id: "378372494398-m350lb72amf1r1oph9af2cnleoive0ts.apps.googleusercontent.com",
            callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { type: "icon",size: "large" }  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
        
    }
    return (
    <div className='Login'>
       
        <form className='loginForm'>
            <label>Email: </label><br/>
            <input id="ie" placeholder='Type your email'/>
            <span id="b1"></span><br/>
            <label>Mật khẩu: </label><br/>
            <input id="ip"placeholder='Type your password'/>
            <span id="border2"></span><br/>
            <button className='loginCfrm'>Đăng nhập</button>
            <p><a href="/passForgot">Quên mật khẩu</a>/<a href='/Register'>Đăng kí</a></p>
            <div className='otherLogin' children='loginForm'>
                <IconContext.Provider value={{size:"15px", className:"icon", color:"#ffffff"}}>
                <FacebookLogin
                    appId="792377525274888"
                    fields="name,email,picture"
                    scope='public_profile, email, user_birthday'
                    callback={responseFacebook}
                    cssClass="fbLogin"
                    autoLoad={false}
                    textButton=''
                    icon={<FaFacebookF/>}
                />
                </IconContext.Provider>
                <div id='buttonDiv'></div>
            </div>
        </form>
    
    </div>
);}
export default Login;