import { userRepository } from "../repository/userRepository.js";
import { userUnavailable, duplicateEmail } from "../error/userError.js";
export class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    // Valid email format
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    // Creates new user
    createUser(input) {
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
        const newUser = {
            id,
            name,
            email,
            role: input.role,
            active: true
        };
        return this.userRepository.create(newUser);
    }
    //Get all users
    getAllUsers() {
        return this.userRepository.findAll();
    }
    //Get user by ID
    getUserById(id) {
        const user = this.userRepository.findById(id);
        if (!user) {
            throw new userUnavailable(id);
        }
        return user;
    }
    // Update
    updateUser(id, changes) {
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
        const updatedChanges = {
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
    // Deactivate
    deactivateUser(id) {
        const existingUser = this.getUserById(id);
        if (!existingUser.active) {
            return existingUser;
        }
        const deactivatedUser = this.userRepository.deactivate(id);
        if (!deactivatedUser) {
            throw new userUnavailable(id);
        }
        return deactivatedUser;
    }
    // Search
    searchUsers(searchTerm) {
        const term = searchTerm.trim().toLowerCase();
        if (!term) {
            return [];
        }
        return this.userRepository.findAll().filter(user => user.name.toLowerCase().includes(term) ||
            user.email.toLowerCase().includes(term));
    }
    // Filter 
    getUsersByRole(role) {
        return this.userRepository.findByRole(role);
    }
    // Filter
    getUsersByStatus(active) {
        return this.userRepository.findAll().filter(user => user.active === active);
    }
    // Sort
    getUsersSortedByName() {
        return this.userRepository.findAll().sort((a, b) => a.name.localeCompare(b.name));
    }
}
//# sourceMappingURL=userService.js.map