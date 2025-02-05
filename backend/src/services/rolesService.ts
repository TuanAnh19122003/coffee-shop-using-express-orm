import Role from "@entity/Role";
import { AppDataSource } from "@databases/data-source";
const userRepository = AppDataSource.getRepository(Role)

class RoleService{
    static async getAllRole(): Promise<Role[]>{
        const data: any = await userRepository.find();
        // console.log(data)
        return data;
    }
}

export default RoleService;