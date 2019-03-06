import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public text = '';
  public toggleHide: string = 'show';
  public isShow: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
