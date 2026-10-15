
type Identifiable = {
    id: number;
};

export class InMemoryRepository<T extends Identifiable> {
    private items: T[];

    constructor(initialItems: readonly T[] = []) {
        // Copy data to avoid modifying original array
        this.items = [...initialItems];

        // Prevent duplicate IDs in the initial data.
        const ids = this.items.map(item => item.id);

        if (new Set(ids).size !== ids.length) {
            throw new Error("Duplicate IDs are not allowed.");
        }
    }

    // CREATE
    create(item: T): T {
        const exists = this.items.some(
            existing => existing.id === item.id
        );

        if (exists) {
            throw new Error(`Employee ID ${item.id} already exists.`);
        }
        this.items = [...this.items, item];
        return item;
    }

    // READ ALL
    getAll(): T[] {
        return [...this.items];
    }

    // READ BY ID
    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    // UPDATE
    update(
        id: number,
        changes: Partial<Omit<T, "id">>
    ): T | undefined {
        const existing = this.getById(id);

        if (existing === undefined) {
            return undefined;
        }

        const updatedItem: T = {
            ...existing,
            ...changes,
            id: existing.id
        };

        this.items = this.items.map(item =>
            item.id === id ? updatedItem : item
        );

        return updatedItem;
    }

    // DELETE
    delete(id: number): boolean {
        const exists = this.items.some(
            item => item.id === id
        );

        if (!exists) {
            return false;
        }

        this.items = this.items.filter(
            item => item.id !== id
        );

        return true;
    }

    // GET TOTAL COUNT
    get count(): number {
        return this.items.length;
    }
}