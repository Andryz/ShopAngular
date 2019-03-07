import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public navTitletext: Observable<string>;
  public toggleHide: string = 'show';
  public isShow: boolean = false;


  
  constructor(private share: ShareService) {
    this.navTitletext = share.getShareData();
  }

  public clickTitle(e){
    this.share.doClick(e);
  }


  ngOnInit() {
  }

}
