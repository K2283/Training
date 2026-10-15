
import type { User, createUser, updateUser, Role } from "../model/user.js";
import type { userRepository } from "../repository/userRepository.js";
import { userUnavailable, duplicateEmail } from "../error/userError.js";

export class UserService {
    constructor(private readonly userRepository: userRepository) {}

    // Valid email format
    private isValidEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Creates new user
    createUser(input: createUser): User {
        const name = input.name.trim();
        const email = input.email.trim().toLowerCase();
        if (!name) {
            throw new Error("Enter the name of user");
        }
        if (!this.isValidEmail(email)) {
            throw new Error("Enter the vaild user email");
        }
        if (this.userRepository.findByEmail(email)) {
            throw new duplicateEmail(email);
        }
        const users = this.userRepository.findAll();
        const id = users.length > 0
            ? Math.max(...users.map(user => user.id)) + 1
            : 1;
        const newUser: User = {
            id,
            name,
            email,
            role: input.role,
            active: true
        };
        return this.userRepository.create(newUser);
    }

    //Get all users
    getAllUsers(): User[] {
        return this.userRepository.findAll();
    }

    //Get user by ID
    getUserById(id: number): User {
        const user = this.userRepository.findById(id);
        if (!user) {
            throw new userUnavailable(id);
        }
        return user;
    }

    // Update
    updateUser(id: number, changes: updateUser): User {
        if (changes.name !== undefined && !changes.name.trim()) {
            throw new Error("Name cannot be empty.");
        }
        if (changes.email !== undefined) {
            const email = changes.email.trim().toLowerCase();
            if (!this.isValidEmail(email)) {
                throw new Error("Please enter a valid email address.");
            }
            const duplicate = this.userRepository.findByEmail(email);
            if (duplicate && duplicate.id !== id) {
                throw new duplicateEmail(email);
            }
            changes = { ...changes, email };
        }
        const updatedChanges: updateUser = {
            ...changes,
            ...(changes.name !== undefined
                ? { name: changes.name.trim() }
                : {})
        };
        const updatedUser = this.userRepository.update(id, updatedChanges);
        if (!updatedUser) {
            throw new userUnavailable(id);
        }
        return updatedUser;
    }



























































    














    
}
