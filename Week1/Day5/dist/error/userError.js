//  import type {User} from './user.js';
export class userUnavailable extends Error {
    constructor(id) {
        super(`User is not found or active whose ID is ${id}..!`);
        this.name = "userUnavailable";
    }
}
export class duplicateEmail extends Error {
    constructor(email) {
        super(`Email ${email} is already registered..!`);
        this.name = "duplicateEmail";
    }
}
//# sourceMappingURL=userError.js.map