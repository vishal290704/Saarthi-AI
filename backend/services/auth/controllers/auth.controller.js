import { app } from "../configs/firebase.js";
import {getAuth} from 'firebase-admin/auth'
import User from "../models/user.model.js";

export const GoogleAuth = async(req, res)=>{
    try {
        const {token} = req.body;
        
        const decoded = await getAuth(app).verifyIdToken(token)

        let user = await User.findOne({
            firebaseUid:decoded.uid
        })

        if(!user){
            user = await User.create({
                firebaseUid:decoded.uid,
                name:decoded.name,
                email:decoded.email
            })
        }

    } catch (error) {
        
    }
}