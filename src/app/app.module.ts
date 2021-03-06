import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// para que FormsModule tenga consecuencia se agrega dentro de los imports asi funcionara en el template
import { FormsModule } from "@angular/forms";
import { ProductComponent } from "./components/product.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { from } from "rxjs";

@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
