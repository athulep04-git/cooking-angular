import { Component } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Header } from '../../header/header';

@Component({
  selector: 'app-contact',
  imports: [Header,Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
