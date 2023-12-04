import { useState } from 'react';
import styles from './login.module.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { addUser } from '../../redux/userSlice';
import { useDispatch } from "react-redux"

const Login = () => {
  const Dispatch=useDispatch()
  const [data,setData]=useState({username:"",password:""})
  const navigate=useNavigate()
  const handleclick=() => {
     navigate('/register')
  }
  console.log(data)
  const handleLogin=async(e)=>{
    e.preventDefault();
    const res=await axios.post('http://localhost:8800/api/auth/login',data)
    console.log("data",res.data.data)
    if(res.data.status){
      Dispatch(addUser(res.data.data[0]))
      navigate('/votingpage')
    }
  }
  return (
    <div className={styles.container}>
    <div className={styles.subContainer}>
     <input type="text" placeholder='USERNAME'  className={styles.input}
     onChange={(e)=>setData({...data,username:e.target.value})}
     />
     <input type="password" placeholder='PASSWORD' className={styles.input} 
      onChange={(e)=>setData({...data,password:e.target.value})}
     />
     <div className={styles.buttons}>

     <button className={styles.btn} onClick={handleLogin}>Login</button>
     <button className={styles.btn} onClick={handleclick}>Register</button>
     </div>
    </div>
    </div>
  )
}

export default Login
