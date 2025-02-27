import { ProductNotFoundError } from "../../domain/ProductNotFoundError";
import { ProductRepository } from "../../domain/ProductRepository";

export class ProductGetOneById {
    constructor(private repository: ProductRepository) { }
    async run(
        id: string
    ) {
        const product = await this.repository.getOneById(id);

        if (!product) throw new ProductNotFoundError('Product not found'); // retorna 404
        
        return product;
    }
}