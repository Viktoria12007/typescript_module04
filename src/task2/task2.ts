import {DeliveryPurchase} from "./delivery-purchase";
import {QuantityDiscountedPurchase} from "./quantity-discounted-purchase";
import {DiscountedPurchase} from "./discounted-purchase";
import {OrderItem} from "./order-item";
import {Product} from "./product";

const items: Array<OrderItem> = [
    new DiscountedPurchase(new Product('Зонт', 1000), 2, 50),
    new DiscountedPurchase(new Product('Туфли', 3500), 5, 100),
    new QuantityDiscountedPurchase(new Product('Платье', 10000), 11,5),
    new QuantityDiscountedPurchase(new Product('Джинсы', 2500), 20,25),
    new DeliveryPurchase(new Product('Кардиган', 4000), 55, 176),
    new DeliveryPurchase(new Product('Пальто', 8500), 47, 232),
]

for (const item of items) {
    item.log();
}
console.log('==========================');
items.sort((a, b) => a.compare(b));

for (const item of items) {
    item.log();
}
