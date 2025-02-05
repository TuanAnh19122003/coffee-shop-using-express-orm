import express, { Express, Request,Response, Router } from "express";
import RoleController from "@controllers/roleController";

const router: Router = express.Router();

router.get('/roles', (req: Request, res: Response) =>{
    RoleController.index(req, res);
})

export default router;