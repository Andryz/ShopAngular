import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public navTitletext: string = '';
  public toggleHide: string = 'show';
  public isShow: boolean = false;

  public clickTitle(e){
    // this.text = e.target.textContent;
    this.share.doClick(e);
  }
  
  constructor(private share: ShareService) {
    this.share.onClick.subscribe(titleText => this.navTitletext = titleText);
  }



  ngOnInit() {
    // console.log(this.text);
  }

}
