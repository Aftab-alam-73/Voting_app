import express from 'express';
import authRouter from './route.js/Auth.js'
import voteRouter from './route.js/Vote.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    withCredentials: true

}))

app.use('/api/auth', authRouter)
app.use('/api/vote', voteRouter)





app.listen(8800,()=>{
    console.log("Server is running on port number 8800")
})