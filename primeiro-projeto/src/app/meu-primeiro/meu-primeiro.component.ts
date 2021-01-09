import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent implements OnInit {

  title: string = 'Hello World 🖖🏻';

  constructor() { }

  ngOnInit(): void {
  }

}
