import express from "express";
const router = express.Router();
import userRouter from  "./userRouter";
import profileRouter from "./profileRouter";
router.use('/users',userRouter);
router.use('/profiles',profileRouter);
router.get('/',(req,res) => {
    res.json({
        ok: true
    })
})
export default router;