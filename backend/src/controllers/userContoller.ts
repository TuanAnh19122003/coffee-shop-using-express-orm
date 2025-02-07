import User from "@entity/User";
import UserService from "@services/usersService";
import Role from "@entity/Role";
import { Request, Response } from "express";
import { AppDataSource } from "@databases/data-source";
const roleRepository = AppDataSource.getRepository(Role);

class UserController{
    static async index(req: Request, res: Response){
        try {
            const user: User[] = await UserService.getAllUser();
            res.render('users/list',{ users: user });
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }

    static async showFormCreate(req: Request, res: Response){
        try {
            const role = await roleRepository.find()
            res.render('users/create',{ roles: role });
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
        
    }
    static async create(req: Request, res: Response){
        try {
            await UserService.createUser(req.body, req.file);
            // console.log(req.file)
            res.redirect('/users');
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
    static async showFormEdit(req: Request, res: Response){
        try {
            const role = await roleRepository.find()
            const user = await UserService.getUserbyId(parseInt(req.params.id));
            res.render('users/edit',{ user, roles: role });
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
    static async edit(req: Request, res: Response){
        try {
            await UserService.editUser(parseInt(req.params.id), req.body, req.file);
            // console.log(parseInt(req.params.id))
            res.redirect('/users');
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
    static async delete(req: Request, res: Response){
        try {
            await UserService.deleteUser(parseInt(req.params.id));
            res.redirect('/users');
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
    static async showFormDetail(req: Request, res: Response){
        try {
            const role = await roleRepository.find()
            const user = await UserService.getUserbyId(parseInt(req.params.id));
            res.render('users/detail',{ user, roles: role });
        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    }
}

export default UserController;