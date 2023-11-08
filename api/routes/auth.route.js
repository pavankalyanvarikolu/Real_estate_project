import express from 'express';
import { authSignup } from '../contollers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/signup',authSignup);


export default authRouter;


