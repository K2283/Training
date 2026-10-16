export class userRepository {
    user = [];
    create(user) {
        this.user.push(user);
        return user;
    }
    findAll() {
        return [...this.user];
    }
    findById(id) {
        return this.user.find(user => user.id === id);
    }
    update(id, changes) {
        const user = this.user.find(user => user.id === id);
        if (!user) {
            return undefined;
        }
        Object.assign(user, changes);
        return user;
    }
    deactivate(id) {
        const user = this.user.find(user => user.id === id);
        if (!user) {
            return undefined;
        }
        user.active = false;
        return user;
    }
    findByEmail(email) {
        return this.user.find(user => user.email.toLowerCase() === email.toLowerCase());
    }
    findByRole(role) {
        return this.user.filter(user => user.role === role);
    }
}
//# sourceMappingURL=userRepository.js.map