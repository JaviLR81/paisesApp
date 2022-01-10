import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  termino: string = '';
  @Output() onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  @Input()  placeholder: string = 'messi';

  // Es un observable algo especial
  debouncer: Subject<string> = new Subject();


  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      });
  }

  buscar(){
    console.log(this.termino);
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(): void{
    this.debouncer.next(this.termino);
  }
}
