import  express from "express";
const router = express.Router();
import UserController from '../controllers/UserController';
router.get('/',UserController.get);
router.post('/',UserController.create);
export default router;