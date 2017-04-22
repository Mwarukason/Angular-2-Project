import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

public happyText = 'My family are proud of my presence'

public myTodos = [
  'Wake up early',
  'brash teeth',
  'take cup of tea'
];

  constructor() { }
  /*event hook */
  ngOnInit() {
    this.happyText = 'Mwarukason family is happy';
  }

  makeHappy(){
    this.happyText = 'Let celebrate the life';
  }
}
