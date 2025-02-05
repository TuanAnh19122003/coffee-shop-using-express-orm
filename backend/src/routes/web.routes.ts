import express, { Express, Request,Response, Router } from "express";
import RoleController from "@controllers/roleController";

const router: Router = express.Router();

router.get('/roles', (req: Request, res: Response) =>{
    RoleController.index(req, res);
})
router.get('/roles/create', (req: Request, res: Response) =>{
    RoleController.showFormCreate(req, res);
})
router.post('/roles/create', (req: Request, res: Response) =>{
    RoleController.create(req, res);
})
router.get('/roles/:id/edit', (req: Request, res: Response)=>{
    RoleController.showFormEdit(req, res);
})
router.post('/roles/:id/edit', (req: Request, res: Response) =>{
    RoleController.edit(req, res);
})
router.get('/roles/:id/delete', (req: Request, res: Response) =>{
    RoleController.delete(req, res);
})
router.get('/roles/:id/detail', (req: Request, res: Response)=>{
    RoleController.showFormDetail(req, res);
})
export default router;