import { createConnection } from "mysql";


export const db =createConnection({
    host: 'localhost',
    user: 'root',
    password:"aftaB@48",
    database:"VotingApp"
})