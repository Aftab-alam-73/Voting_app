
import { useState } from 'react'
import styles from './register.module.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Register = () => {
  const navigate=useNavigate()
  const [data,setData]=useState({username:"",password:"",email:"",phone:"",isAdmin:false})
  const handleclick = () =>{
    navigate('/login')
  }
  console.log(data)
  const handleRegister=async(e)=>{
    e.preventDefault();
    const res=await axios.post('http://localhost:8800/api/auth/register',data)
   
    if(res.data.status){
      navigate('/login')
    }
  }
  return (
    <div className={styles.container}>
    <div className={styles.subContainer}>
     <input type="text" placeholder='USERNAME...'  className={styles.input}
     onChange={(e)=>setData({...data,username:e.target.value})}
     />
     <input type="password" placeholder='PASSWORD' className={styles.input}
      onChange={(e)=>setData({...data,password:e.target.value})}
      />
     <input type="email" placeholder='EMAIL ID' className={styles.input}
      onChange={(e)=>setData({...data,email:e.target.value})}
      />
     <input type="password" placeholder='PHONE NO.' className={styles.input}
      onChange={(e)=>setData({...data,phone:e.target.value})}
      />
     <div className={styles.buttons}>
     <button className={styles.btn} onClick={handleRegister}>Register</button>
     <button className={styles.btn} onClick={handleclick}>Login</button>
     </div>
    </div>
    </div>
  )
}

export default Register
