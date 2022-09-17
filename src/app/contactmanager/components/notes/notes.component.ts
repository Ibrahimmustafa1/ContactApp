import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Note } from '../../models/note';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() notes!: any;
  userNotes: any;
  displayedColumns: string[] = ['id', 'title', 'date'];
  dataSource!: MatTableDataSource<Note>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  ngOnInit(): void {}
  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }
  ngAfterViewInit() {
    console.log(this.sort);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
