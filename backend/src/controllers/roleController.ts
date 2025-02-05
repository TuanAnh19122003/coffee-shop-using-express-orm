import Role from "@entity/Role";
import RoleService from "@services/rolesService";
import { Request, Response } from "express";

class RoleController{
    static async index(req: Request, res: Response){
        try {
            const role: Role[] = await RoleService.getAllRole();
            res.render('roles/index',{ role: role });
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
}

export default RoleController;