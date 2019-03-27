import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this._activatedRoute.paramMap.subscribe((params: ParamMap)=>{
    //   console.log(params.get('id'));
    // });

    // this._activatedRoute.queryParamMap.subscribe((params: ParamMap)=>{
    //   console.log(params.get('page'));
    // });

    // this._activatedRoute.fragment.subscribe((f: string)=>{
    //   console.log(f);
    // });
    console.log(this._activatedRoute.snapshot.data.product);

  }
}
