import {Product} from "./product";

export abstract class OrderItem {
    protected constructor(private product: Product, private quantity: number) {}

    get _product(): Product {
        return this.product;
    }
    set _product(newProduct: Product) {
        this.product = newProduct;
    }
    get _quantity(): number {
        return this.quantity;
    }
    set _quantity(newQuantity: number) {
        this.quantity = newQuantity;
    }
    log(): void {
        this.product.log();
    }
    compare(other: OrderItem): number {
        return other.getCost() - this.getCost();
    }
    abstract getCost(): number
}
