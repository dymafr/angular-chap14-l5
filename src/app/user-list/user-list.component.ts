import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() names: string[] | null = null;
  @Input() search!: string;

  constructor() {}

  ngOnInit() {}
}
