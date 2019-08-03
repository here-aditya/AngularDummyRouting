import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./common.component.css']
})

export class HeaderUserComponent implements OnInit {
  title = 'Routing Demo APP';
  constructor() { }
  ngOnInit() {
  }
}