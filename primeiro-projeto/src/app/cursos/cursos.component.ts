import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  linkProfile: string;

  stacks: string[];

  constructor(private cursosService: CursosService) {
    this.linkProfile = 'https://github.com/Mitsu325';

    // Instância de classe no Javascript
    // let service = new CursosService();

    this.stacks = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }


}
