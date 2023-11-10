export type Product = {
    "id": number,
    "name": string,
    "price": number,
    "image": string,
    "text": string,
    "quantidade": number
}

export type Order = {
    id: string,
    email: string,
    products: Product[],
    status: "pending" | "paid" | "delivered" | "canceled"
    date: string
    total: number;
}
