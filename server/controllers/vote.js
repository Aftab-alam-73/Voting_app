import { db } from "../connection.js";

export const getCandidates=(req,res)=>{
    try{
       const q="SELECT * FROM Candidates";
       db.query(q,(err,data)=>{
        if(err) return res.status(500).json({status:false,message:message.err})
        return res.status(200).json(data);
       })
    }catch(err){
        return res.status(500).json({status:false,message:"Something went wrong"})
    }
}
export const addVote=(req,res) =>{
    console.log(req.body)
    const {candidate,voter} = req.body;
    
    try{
         const q="INSERT INTO Vote(`candidate`,`voter`) VALUES(?)";
         const value=[candidate,voter];
         db.query(q,[value],(err,data) =>{
            if(err) return res.status(500).json({status:false,message:err.message})
            return res.status(200).json({status:true,message:"vote has been added successfully."});
         })
    }catch(err){
        return res.status(500).json({status:false,message:"Something went wrong"});
    }
}