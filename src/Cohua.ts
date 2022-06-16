import {RemoteCart} from "@makechtec/remote-cart";
import {Cart} from "@makechtec/cart-guidelines";
import { Config } from "./Config";
import {Stock} from "@makechtec/stock";

export class CohuaClass{
    private cart: Cart;
    private config: Config;
    private stock: Stock;

    constructor(config: Config){
        this.config = config;
        this.cart = new RemoteCart();
        this.stock = new Stock();
    }

    getCart(): Cart{
        return this.cart;
    }

    getStock(): Stock{
        return this.stock;
    }
}

export const Cohua = new CohuaClass({});