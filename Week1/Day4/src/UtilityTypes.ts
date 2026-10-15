
import type { User } from "./User.js";

// All properties become optional
export type UpdateUserInput = Partial<User>;

//Keep only selected properties
export type UserSummary = Pick<User, "id" | "name">;

//Exclude properties
export type CreateUserInput = Omit<User, "id" | "active">;
