import { OrderItem } from "./order-item";
import {Product} from "./product";

export class DiscountedPurchase extends OrderItem {
    constructor(product: Product, quantity: number, public discountPrice: number) {
        super(product, quantity);
    }
    getCost(): number {
        return (this._product._cost - this.discountPrice) * this._quantity;
    }
}
