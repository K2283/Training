
import { userRepository } from "./repository/userRepository.js";
import { UserService } from "./service/userService.js";
import type { Role } from "./model/user.js";

// Initialize repository and service
const repository = new userRepository();
const userService = new UserService(repository);

//handle error
function runOperation<T>(title: string, operation: () => T): void {
    console.log(`\n--- ${title} ---`);
    try {
        const result = operation();
        console.log(result);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error("error");
        }
    }
}

console.log("User Management System")
//Create 
runOperation("User 1", () => userService.createUser({
        name: "Venkata",
        email: "venkata@gmail.com",
        role: "ADMIN"
    })
);

runOperation("User 2", () => userService.createUser({
        name: "Gopinadh",
        email: "gopi@gmail.com",
        role: "USER"
    })
);

runOperation("User 3", () => userService.createUser({
        name: "Sujeeth",
        email: "sujeeth@gmail.com",
        role: "USER"
    })
);

//get all users
runOperation("Get All Users", () => userService.getAllUsers());

//get user by ID
runOperation("UserID: 2", () => userService.getUserById(2));

//Update user by ID reference
runOperation("Update User ID 2", () => userService.updateUser(2,
    {
        name: "Priya Reddy",
        email: "priya.reddy@example.com"
    })
);

//duplicate email
runOperation("Test Duplicate Email Validation", () => userService.createUser({
        name: "Another Ravi",
        email: "RAVI@example.com",
        role: "USER"
    })
);

//Search
runOperation("Search Users: priya", () => userService.searchUsers("priya"));

//Filter
const role: Role = "USER";
runOperation("Get Users By Role: user", () => userService.getUsersByRole(role));

//Deactivate
runOperation("Deactivate User 3", () => userService.deactivateUser(3));

//active users
runOperation("Get Active Users", () => userService.getUsersByStatus(true));

//inactive users
runOperation("Get Inactive Users", () => userService.getUsersByStatus(false));

//Sort
runOperation("Sort Users By Name", () => userService.getUsersSortedByName());

//user not found
runOperation("Test Missing User", () =>userService.getUserById(999));

