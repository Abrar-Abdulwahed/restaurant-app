export type Product = {
    id: number,
    title: string,
    description: string,
    category: string,
    images: string[],
    thumbnail: string,
    price: number,
    discountPercentage: number,
    meta: {
        createdAt: Date,
        updatedAt: Date,
    }
}

export type PopularPage = {
    id: number;
    title: string;
    url: string;
};