// import { Component, OnInit } from '@angular/core';
// import {$} from 'jquery';

// @Component({
//   selector: 'app-reff',
//   templateUrl: './reff.component.html',
//   styleUrls: ['./reff.component.css']
// })
// export class ReffComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
