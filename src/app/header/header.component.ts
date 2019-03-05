import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public toggleHide: string;

  ngOnInit() {
  }

  toggleSearch(){
    this.toggleHide = 'show';
  }
}
