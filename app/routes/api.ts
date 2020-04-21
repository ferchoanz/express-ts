import express from "express";
const router = express.Router();
import userRouter from  "./userRouter";
router.use('/users',userRouter);
router.get('/',(req,res) => {
    res.json({
        ok: true
    })
})
export default router;