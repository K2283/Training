import type { User, updateUser, Role } from "../model/user.js";
export declare class userRepository {
    private user;
    create(user: User): User;
    findAll(): User[];
    findById(id: number): User | undefined;
    update(id: number, changes: updateUser): User | undefined;
    deactivate(id: number): User | undefined;
    findByEmail(email: string): User | undefined;
    findByRole(role: Role): User[];
}
//# sourceMappingURL=userRepository.d.ts.map