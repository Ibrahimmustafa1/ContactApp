import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../servicies/user.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor(
    private BreakpointObserver: BreakpointObserver,
    private userService: UserService,
    private Router: Router,
    private ElementRef: ElementRef
  ) {}
  isScreenSmall!: boolean;
  users!: User[];
  @ViewChild('sidenav') sidenav!: MatSidenav;
  ngOnInit(): void {
    this.BreakpointObserver.observe([`(min-width: 720px)`]).subscribe(
      (state) => {
        this.isScreenSmall = !state.matches;
      }
    );

    this.userService.getAllUsers();

    this.userService.allusers.subscribe((data) => {
      this.users = data;
      if (this.users.length > 0) {
        this.Router.navigate(['/contactmanager/' + this.users[0].id]);
      }
    });

    this.Router.events.subscribe(() => {
      if (this.isScreenSmall) this.sidenav.close();
    });
  }
}
