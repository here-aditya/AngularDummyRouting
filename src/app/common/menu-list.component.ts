import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./common.component.css']
})

export class MenuListComponent implements OnInit {
  cururl;
  constructor(private router: Router) {
    this.cururl = this.router.url;
  }
  ngOnInit() {
  }
}
