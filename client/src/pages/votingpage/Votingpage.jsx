import { useState } from 'react'
import styles from './votingpage.module.css'
import { useSelector} from "react-redux"
import axios from 'axios'
const Votingpage = () => {
  const {username}=useSelector(state=>state.user)
  const [selectedOption,setSelectedOption] = useState("");
  
  console.log("username",username)
    const handchange=(e)=>{
      setSelectedOption(e.target.value);
       
    }
    const handleVote=async(e)=>{
      e.preventDefault();
      const res=await axios.post('http://localhost:8800/api/vote/addvote',{candidate:selectedOption,voter:username})

    }
  return (
    <div className={styles.container}>
      <form className={styles.form} >
        <div className={styles.option}>
        <input type="radio" name='voting' id='vote' onChange={handchange} value="Aftab" />
        <label htmlFor="vote" className={styles.label}>Aftab</label>
        </div>
        <div className={styles.option}>
        <input type="radio" name='voting' id="vote2" onChange={handchange} value="Alam"/>
        <label htmlFor="vote2" className={styles.label}>Aftab</label>
        </div>
        <div className={styles.option}>
        <input type="radio" name='voting' id='vote3' onChange={handchange} value="Hasnain"/>
        <label htmlFor="vote3"  className={styles.label}>Aftab</label>
        </div>
        <button className={styles.btn} onClick={handleVote}>Vote</button>
      </form>
    </div>
  )
}

export default Votingpage
