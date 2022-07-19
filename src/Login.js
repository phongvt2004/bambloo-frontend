import './Login.css'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
function Login(){
    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
    <div>
        <form>
            <label>Email:</label>
            <input/><br/>
            <label>Mật khẩu:</label>
            <input/>
            <FacebookLogin
                appId="792377525274888"
                fields="name,email,picture,birthday,gender"
                callback={responseFacebook}
                icon="fa-facebook"
            />
        </form>
    </div>
);}
export default Login;