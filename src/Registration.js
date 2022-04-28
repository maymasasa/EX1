import users from "./data";
import {useNavigate, Link} from 'react-router-dom';
import logedIn from "./User";

function Regisration() {
    var nav = useNavigate();
    const register = function () {
      var uname = document.getElementById("uname").value;
      var psw = document.getElementById("psw").value;
      var dname = document.getElementById("DisplayName").value;
      if(verfiy(uname, psw, dname)) {
        users.push([uname, psw, "img/defualt.png", dname, [], []]);
        localStorage.setItem("user", users.length-1);
        nav("/chat");
      }
    }
    const verfiy = function (uname, psw, dname) {
      var tnay = true;
        if(uname.length > 6 || uname == ""){
          alert("user name must be max 6 letters and not empty");
          tnay = false;
        }
        if(userNameTaken(uname)){
          alert("User name is already taken");
          tnay = false;
        }
        if(psw.length < 8){
          alert("password must be at least 8 letters");
          tnay = false;
        }
        if(dname == ""){
          alert("Display name cannot be empty");
        }
        return tnay;
    }
    const userNameTaken = function(uname) {
        for (var i = 0; i < users.length; i++) {
            if (users[i][0] == uname) {
              return true;
            }
        }
        return false;
    }
    return (
        <div className="Login">
        <br/>
        <table className="LoginTable">
          <tbody>
            <tr>
              <td>Username</td>
              <td><input type="text" size="70px" id="uname" required/></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="password" size="70px" id="psw" required/></td>
            </tr>
            <tr>
              <td>Display name</td>
              <td><input type="DisplayName" size="70px" id="DisplayName" required/></td>
            </tr>
            <tr>
              <td><input type="submit" value="register" className="BlueBtn" onClick={()=>{register()}}/></td>
              <td>already registered? <u><Link to="/">Click here</Link></u> to login</td>
            </tr>
          </tbody>
        </table>
        <br/>
      </div>
    );
  }
  
  export default Regisration;