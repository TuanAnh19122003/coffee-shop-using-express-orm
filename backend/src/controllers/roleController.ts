import Role from "@entity/Role";
import RoleService from "@services/rolesService";
import { Request, Response } from "express";

class RoleController{
    static async index(req: Request, res: Response){
        try {
            const role: Role[] = await RoleService.getAllRole();
            res.render('roles/list',{ roles: role });
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }

    static async showFormCreate(req: Request, res: Response){
        res.render('roles/create');
    }
    static async create(req: Request, res: Response){
        try {
            await RoleService.createRole(req.body);
            res.redirect('/roles');
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }

    static async showFormEdit(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id);
            const data = await RoleService.getRolebyId(id);
            res.render('roles/edit', { data: data });
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
    static async edit(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id);
            await RoleService.editRole(id, req.body);
            res.redirect('/roles');
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
    static async delete(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id);
            await RoleService.deleteRole(id);
            res.redirect('/roles');
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
    static async showFormDetail(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id);
            const data = await RoleService.getRolebyId(id);
            res.render('roles/detail', { data: data });
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
}

export default RoleController;