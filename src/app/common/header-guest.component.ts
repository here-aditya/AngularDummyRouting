import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-guest',
  templateUrl: './header-guest.component.html',
  styleUrls: ['./common.component.css']
})

export class HeaderGuestComponent implements OnInit {
  title = 'Routing Demo APP';
  constructor() { }
  ngOnInit() {
  }
}