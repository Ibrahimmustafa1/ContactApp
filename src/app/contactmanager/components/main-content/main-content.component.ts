import { UserService } from './../../servicies/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private UserService: UserService,
    private router: Router
  ) {}
  user!: any;
  userNotes!: any;
  id!: number;
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params) => {
      this.id = params.id;
      this.UserService.getUserByID(+this.id);
      this.UserService.user.subscribe((data) => {
        this.user = data;
        console.log(this.user);
      });
    });
  }
}
