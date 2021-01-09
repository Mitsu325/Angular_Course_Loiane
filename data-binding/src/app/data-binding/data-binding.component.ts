import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://github.com/Mitsu325';
  like: boolean = true;
  urlImage: string = 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg';
  urlImage2: string = 'https://cdn.pixabay.com/photo/2015/11/04/20/59/milky-way-1023340_960_720.jpg';

  getValue() {
    return 1;
  }

  getLike() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
