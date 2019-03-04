import { Component, OnInit } from '@angular/core';
import { data$ } from './common/data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'shop';

  public products$ = data$;

  ngOnInit(){
    // console.log(products$);
  }
}
