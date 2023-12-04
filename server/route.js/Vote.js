import express from 'express';
import { addVote, getCandidates } from '../controllers/vote.js';
import { verifyToken } from '../jwt.js';

const router= express.Router();

router.get('/getcandidates',getCandidates)
router.post('/addvote',addVote)

export default   router;