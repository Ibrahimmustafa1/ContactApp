import { UserService } from './../../servicies/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss'],
})
export class NewContactDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private UserService: UserService
  ) {}
  user!: User;

  ngOnInit(): void {
    this.user = new User();
  }
  save(): void {
    this.dialogRef.close(this.user);
    this.UserService.saveUser(this.user);
  }

  dismiss(): void {
    this.dialogRef.close(null);
  }
}
