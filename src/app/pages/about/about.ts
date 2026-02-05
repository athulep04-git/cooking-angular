import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

@Component({
  selector: 'app-about',
  imports: [Footer, Header],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
