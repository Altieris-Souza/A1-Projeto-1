import express, { Request, Response } from "express";
import PingController from "../controllers/PingController";
const router = express.Router()
	
router.post('/ping', async (req: Request, res: Response) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
})
	
export default router;
