import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  navStatus = false;

  constructor() {}

  showSideNav($event: boolean) {
    this.navStatus = $event;
  }

  ngOnInit(): void {}
}
