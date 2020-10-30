import { Component } from "@angular/core";
import { Product } from "./product.module";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  // las variables que se tengan dentro de appcomponent, son variables que se renderizaran o mostraran en el archivo html
  title = "Store";

  items = ["natha", "bob", "pepe"];

  products: Product[] = [
    // se tipa el array de products indicandole que solo acepte el array tipo Product - solo se itera en arrays
    {
      id: "1",
      image: ".assets/images/camiseta.png",
      title: "Camiseta",
      price: 80000,
      description: "bla bla bla bla bla"
    },
    {
      id: "2",
      image: "assets/images/hoodie.png",
      title: "Hoodie",
      price: 80000,
      description: "bla bla bla bla bla"
    },
    {
      id: "3",
      image: "assets/images/mug.png",
      title: "Mug",
      price: 80000,
      description: "bla bla bla bla bla"
    },
    {
      id: "4",
      image: "assets/images/pin.png",
      title: "Pin",
      price: 80000,
      description: "bla bla bla bla bla"
    },
    {
      id: "5",
      image: "assets/images/stickers1.png",
      title: "Stickers",
      price: 80000,
      description: "bla bla bla bla bla"
    },
    {
      id: "6",
      image: "assets/images/stickers2.png",
      title: "Stickers",
      price: 80000,
      description: "bla bla bla bla bla"
    }
  ];

  // esta funcion add() se ejecuta en el metodo click
  add() {
    this.items.push("nuevo");
  }
  // con index : number se esta tipeando -typescript- la variable que en este caso es tipo number
  delete(index: number) {
    this.items.splice(index, 1);
  }
}
