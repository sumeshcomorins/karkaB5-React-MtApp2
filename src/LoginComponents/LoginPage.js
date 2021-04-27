import React,{useState} from 'react'
// import './Style.css';
import axios from "axios";

export default function LoginPage() {
//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()
//     const request ='candidate_login'
//      const data={
//         "request" :'candidate_login',
//         "email":'jegan',
//         "password":"1234567890"
//       }
//     const data ={email,password}
    

//     const PressHandler =()=>{
        
//             axios.post('https://reqres.in/api/login',data)
            
//     .then(async function(response) {
//         console.log(response.data)
//       // if(response.data.token!=''){
//       //       alert("success")
//       // }else{
//       //   alert("failed")
//       // }
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//         }


//     const onChangeHandler = event => {
        
//        setEmail(event.target.value)
       
//       };
//     const onChangeHandlerPass = event => {
      
//       setPassword(event.target.value)
//       };

    
//     return (
//         <div className="container">
//         <div className="form-box">
//           <div className="header-form">
//             <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
//             <div className="image">
//             </div>
//           </div>
//           <div className="body-form">
//            <form>
//               <div className="input-group mb-3">
//    <div className="input-group-prepend">
//     <span className="input-group-text"><i className="fa fa-user"></i></span>
//   </div>
//   <input type="email" className="form-control" placeholder="Email" value={email} onChange ={(event)=>onChangeHandler(event)}/>
// {email}
// </div>
//  <div className="input-group mb-3">
//    <div className="input-group-prepend">
//     <span className="input-group-text"><i className="fa fa-lock"></i></span>
//   </div>
//   <input type="password" className="form-control" placeholder="Password" value={password} onChange ={(event)=>onChangeHandlerPass(event)}/>
// {password}
// </div>
//  <button type="button" className="btn btn-secondary btn-block" 
//  onClick = { ()=>PressHandler()}
//  >LOGIN</button>
//  <div className="message">
// <div><input type="checkbox" /> Remember ME</div>
//  <div><a href="#">Forgot your password</a></div>
//  </div>
//    </form>
//             <div className="social">
//               <a href="#"><i className="fab fa-facebook"></i></a>
//               <a href="#"><i className="fab fa-twitter-square"></i></a>
//               <a href="#"><i className="fab fa-google"></i></a>
//             </div>
//           </div>
//         </div>
//        </div>
//     )

const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginFunction = async() => {
        const data = {
            email: userName,
            password: password

        }

        const response=  await axios.post('https://reqres.in/api/login',data)
        if(response.data.token!=''){
            alert("suucc")
        }else{
            alert("faileds")
        }

    }

    return(
        <div className="login_section">
            <h1>Login Form</h1>
            <form className="" >
                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required onChange={ (e)=> setUsername(e.target.value)}></input>
                    
                    <label for="psw"><b>{userName}</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required onChange={ (e)=> setPassword(e.target.value)} ></input>
                    <label for="psw"><b>{password}</b></label>
                    <button type="button" onClick={()=> loginFunction()}>Login</button>
                </div>
                    
            </form>
        </div>
    )

}





