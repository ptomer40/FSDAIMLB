import React, { useState } from 'react'
import{useNavigate} from 'react-router-dom'
function Login({rdata}) {

const[email,setEmail]=useState();
    const[password,setpassword]=useState();
const navigate=useNavigate();
function verification(){
if(rdata.email==email){
  alert("user is valid");
  navigate("/dashboard");

}
else{
  alert("user is invalid");
}
}

  return (
    <div>
      <div style={{color:'red',backgroundColor:'#42c2f5', width:'300px', height:'30px', paddingLeft:'100px'}}>Login</div>
<form>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
 
  <button type="submit" onClick={verification}  class="btn btn-primary">Login</button>
</form>


    </div>
  )
}

export default Login