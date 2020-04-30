import  express from "express";
import ProfileController from "../controllers/ProfileController";
const router = express.Router();
router.get('/',ProfileController.get);
export default router;