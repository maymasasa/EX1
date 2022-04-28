import users from "./data";
import logedIn from "./User";
import {useNavigate, Link} from 'react-router-dom';

function Login() {
  var nav = useNavigate();
  const login = function () {
    var uname = document.getElementById("uname").value;
    var psw = document.getElementById("psw").value;
    if (validate(uname, psw)) {
      nav("/chat");
    } else {
      alert("user name or password are incorrect");
    }
  }
  const validate = function(uname, psw){
    for (var i = 0; i < users.length; i++) {
      if ((users[i][0] == uname) && (users[i][1] == psw)) {
        localStorage.setItem("user", i);
        return true;
      }
    }
    return false;
  }
  return (
    <div className="Login">
      <br></br>
      <table className="LoginTable">
        <tbody>        
          <tr>
          <td>Username</td>
          <td><input type="text" size="70px" id="uname" required></input></td>
          </tr>
          <tr>
          <td>Password</td>
          <td><input type="password" size="70px" id="psw" required></input></td>
          </tr>
          <tr>
          <td><input type="submit" value="Login" className="BlueBtn" onClick={()=>{login()}}></input></td>
          <td>not registered? <u><Link to="/registration">Click here</Link></u> to register</td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
}

export default Login;