import { OrderItem } from "./order-item";
import {Product} from "./product";

export class DeliveryPurchase extends OrderItem {
    constructor(product: Product, quantity: number, public transportCosts: number) {
        super(product, quantity);
    }
    getCost(): number {
        return (this._product._cost + this.transportCosts) * this._quantity;
    }
}
