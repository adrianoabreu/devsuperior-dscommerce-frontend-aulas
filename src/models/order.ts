export class OrderDTO {
    id?: number;
    items: OrderItemDTO[] = [];
    get total(): number {
        let sum = 0;
        this.items.forEach(item => {
            sum += item.subTotal();
        })
        return sum;
    }
}

export class OrderItemDTO{
    productId?: number;
    quantity?: number;
    name?: string;
    price?: number;
    imgUrl?: string;

    constructor(productId: number, quantity:number,name:string,price:number,imgUrl: string){
        this.productId = productId;
        this.quantity = quantity;
        this.name = name;
        this.price = price;
        this.imgUrl = imgUrl;
    }

    public subTotal(): number {
        return (this.price ?? 0) * (this.quantity ?? 0);
    }
}