export class Product {
    constructor(private name: string, private cost: number) {}

    get _name(): string {
        return this.name;
    }

    set _name(newName: string) {
        this.name = newName;
    }

    get _cost(): number {
        return this.cost;
    }

    set _cost(newCost: number) {
        this.cost = newCost;
    }

    public log(): void {
        console.log(`${this.name}; ${this.cost}`);
    }
}
