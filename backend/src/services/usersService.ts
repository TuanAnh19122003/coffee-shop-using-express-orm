import User from "@entity/User";
import Role from "@entity/Role";
import fs from 'fs';
import path from 'path';

import { AppDataSource } from "@databases/data-source";
const userRepository = AppDataSource.getRepository(User);
const roleRepository = AppDataSource.getRepository(Role);

class UserService {
    static async getAllUser(): Promise<User[]>{
        const data: any = await userRepository.find({
            relations: ["role"]
        });
        return data;
    }
    
    static async getUserbyId(id: number){
        const user = await userRepository.findOne({where: {id}, relations: ["role"]});
        if(!user){
            throw new Error("User not found");
        }
        return user;
    }
    
    static async createUser(data: any, file?: Express.Multer.File){
        const { firstName, lastName, email, password, phone, address, roleId } = data;
        const role = await roleRepository.findOne({ where: { id: roleId } });
        const user: User = new User()
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        user.phone = phone;
        user.address = address;
        if(role){
            user.role = role;
        }

        if(file){
            user.image = `/uploads/${file.filename}`;
        }
        
        
        return await userRepository.save(user);
    }
    
    static async editUser(id: number, data: any, file?: Express.Multer.File){
        const { firstName, lastName, email, password, phone, address, roleId } = data;
        const user = await userRepository.findOne({where: {id}}); 
        
        if(!user){
            throw new Error("User not found");
        }
        
        user.firstName = firstName!== undefined? firstName : user.firstName;
        user.lastName = lastName!== undefined? lastName : user.lastName;
        user.email = email!== undefined? email : user.email;
        user.password = password!== undefined? password : user.password;
        user.phone = phone!== undefined? phone : user.phone;
        user.address = address!== undefined? address : user.address;
        const role = await roleRepository.findOne({ where: { id: roleId } });
        if(role){
            user.role = role;
        }
        
        if (file) {
            if (user.image) {
                // console.log("Ảnh cũ :", user.image); // Kiểm tra giá trị ảnh cũ
                const oldImagePath = path.join(__dirname, '..', '..', 'public', 'uploads', path.basename(user.image));
                // console.log("Đường dẫn ảnh cũ " + oldImagePath);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                    console.log("Ảnh cũ đã được xóa.");
                }
            }
        
            // Gán ảnh mới
            user.image = `/uploads/${file.filename}`;
        }
        
        return await userRepository.save(user);
    }
    
    static async deleteUser(id: number){
        const user = await userRepository.findOne({where: {id}});
        
        if(!user){
            throw new Error("User not found");
        }
        if (user.image) {
            const oldImagePath = path.join(__dirname, '..', '..', 'public', 'uploads', path.basename(user.image));
            // console.log("Đường dẫn ảnh cũ " + oldImagePath);
            if (fs.existsSync(oldImagePath)) {
                try {
                    fs.unlinkSync(oldImagePath);
                    console.log("Ảnh và người dùng đã được xóa.");
                } catch (error) {
                    console.error("Lỗi khi xóa ảnh:", error);
                }
            }
        }
        await userRepository.remove(user);
    }
}

export default UserService;