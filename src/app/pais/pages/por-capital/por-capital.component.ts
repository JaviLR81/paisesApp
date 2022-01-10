import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino    : string = '';
  hayError   : boolean = false;
  paises     : Country[] = [];
  placeholder: string = 'Por capital';

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string): void {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe({
        next: resp => {
          console.log("~ mostrando las capitales")
          console.log(resp);
          this.paises = resp;
        },
        error: error => {
          this.paises = [];
          console.log("Fui un error");
          console.log(error);
        }
      });
  }

}
