
import type { User, updateUser, Role } from "../model/user.js";

export class userRepository{
    private user:User[] = [];

    create(user:User):User{
       this.user.push(user);
       return user;
    }

    findAll():User[]{
        return[...this.user];
    }

    findById(id: number): User | undefined {
        return this.user.find(user => user.id === id);
    }

    update(id: number,changes: updateUser): User | undefined {
    const user = this.user.find(user => user.id === id);
    if (!user) {
        return undefined;
    }
    Object.assign(user, changes);
    return user;
   }
     
    deactivate(id: number): User | undefined {
      const user = this.user.find(user => user.id === id);
      if (!user) {
        return undefined;
      }
      user.active = false;
      return user;
    }

   
    findByEmail(email: string): User | undefined {
    return this.user.find(
        user => user.email.toLowerCase() === email.toLowerCase());
    }

    findByRole(role: Role): User[] {
    return this.user.filter(user => user.role === role);
}
}

