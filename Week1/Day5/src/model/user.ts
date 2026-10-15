
export type Role = "ADMIN" | "USER";

export interface User{
 id : number;
 name : string;
 email : string;
 role : Role;
 active : boolean;
}

export type createUser = Omit<User, "id" | "active">;

export type updateUser = Partial<createUser>;
