import { OrderItem } from "./order-item";
import {Product} from "./product";

export class QuantityDiscountedPurchase extends OrderItem {
    constructor(product: Product, quantity: number, public discountPercent: number) {
        super(product, quantity);
    }
    getCost(): number {
        if (this._quantity >= 15) {
            return this._product._cost * this._quantity * (1 - this.discountPercent / 100);
        }
        return this._product._cost * this._quantity;
    }
}
