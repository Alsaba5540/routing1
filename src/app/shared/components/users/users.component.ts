import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../model/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
usersInfo :Array<Iusers> =[]
  constructor(private _usersService : UsersService,
    private _router : Router) { }

  ngOnInit(): void {
    this.usersInfo = this._usersService.getAllUsers()
  }

  onUserShow(){
    this._router.navigate([''])

  }

}
