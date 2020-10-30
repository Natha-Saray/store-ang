import { Component } from "@angular/core";
import { Product } from "../product.module";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html"
})
// se define la clase craeda - en este caso product - luego se exporta para que cualquier elemento en angular pueda utilizar esta clase o componente
export class ProductComponent {
  product: Product = {
    id: "1",
    image: ".assets/images/camiseta.png",
    title: "Camiseta",
    price: 80000,
    description: "bla bla bla bla bla"
  };
}
