import { Ingredient } from "../models/ingredient.model";

export class Product {
  public id: string;
  public name: string;
  public price: number;
  public ingredients: Ingredient[];

  public updateFrom(src: Product): void {
    this.id = src.id;
    this.name = src.name;
    this.price = src.price;
    );
  }
}
