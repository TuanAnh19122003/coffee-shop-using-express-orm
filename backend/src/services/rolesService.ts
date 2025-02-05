import Role from "@entity/Role";
import { AppDataSource } from "@databases/data-source";
const userRepository = AppDataSource.getRepository(Role)

class RoleService{
    static async getAllRole(): Promise<Role[]>{
        const data: any = await userRepository.find();
        // console.log(data)
        return data;
    }
    
    static async getRolebyId(id: number){
        const role = await userRepository.findOne({where: {id}});
        if(!role){
            throw new Error("Role not found");
        }
        return role;
    }
    static async createRole(data: any){
        const { name } = data;
        const role: Role = new Role()
        role.name = name;
        return await userRepository.save(role);
    }
    static async editRole(id: number, data: any): Promise<Role>{
        const { name } = data; 
        const role = await userRepository.findOne({where: {id}}); 
        
        if(!role){
            throw new Error("User not found");
        }
        
        role.name = name !== undefined ? name : role.name
        return await userRepository.save(role);
    }
    static async deleteRole(id: number): Promise<void>{
        const role = await userRepository.findOne({where: {id}});
        
        if(!role){
            throw new Error("Role not found");
        }
        
        await userRepository.remove(role);
    }
}

export default RoleService;