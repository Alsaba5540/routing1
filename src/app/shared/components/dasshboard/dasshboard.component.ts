import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dasshboard',
  templateUrl: './dasshboard.component.html',
  styleUrls: ['./dasshboard.component.scss']
})
export class DasshboardComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  onShowProducts(){
    this._router.navigate(['/products'])


  }

}
