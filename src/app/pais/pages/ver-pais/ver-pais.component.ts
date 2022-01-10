import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  // Se que puede ser nulo pero tratalo como siempre tuviese data
  pais!: Country;

  constructor
  (
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe( ({id}) => {
    //     console.log("~ params", id)
    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe( resp =>{
    //         console.log("~ resp capital", resp)
    //       });
    //   });

    this.activatedRoute.params
      .pipe(
        // Recibir un observable y regresar otro observable
        // Esta recibiendo los params como parametro
        switchMap( ({id}) => this.paisService.getPaisPorAlpha(id) ),
        tap( console.log )
      )
      .subscribe( resp => {
        this.pais = resp;
        // console.log("~ resp", resp)
      })
  }

}
