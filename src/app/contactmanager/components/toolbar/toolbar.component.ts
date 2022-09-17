import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSideNav: EventEmitter<any> = new EventEmitter<any>();
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  Onclick() {
    this.toggleSideNav.emit();
  }
  openAddContactDialog() {
    let dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe((res) => {});
  }
}
