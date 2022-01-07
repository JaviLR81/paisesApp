import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = 'hello';
  hayError : boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(): void {

    this.hayError = false;

    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: resp => {
          console.log(resp);

          if(resp.status == 404){
            this.hayError = true;
          }

        },
        error: error => {
          console.log("Fui un error");
          console.log(error);
        }
      });
  }

}
