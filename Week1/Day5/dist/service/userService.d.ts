import type { User, createUser, updateUser, Role } from "../model/user.js";
import { userRepository } from "../repository/userRepository.js";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: userRepository);
    private isValidEmail;
    createUser(input: createUser): User;
    getAllUsers(): User[];
    getUserById(id: number): User;
    updateUser(id: number, changes: updateUser): User;
    deactivateUser(id: number): User;
    searchUsers(searchTerm: string): User[];
    getUsersByRole(role: Role): User[];
    getUsersByStatus(active: boolean): User[];
    getUsersSortedByName(): User[];
}
//# sourceMappingURL=userService.d.ts.map