import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-site-options',
  templateUrl: './site-options.component.html',
  styleUrls: ['./site-options.component.scss']
})
export class SiteOptionsComponent implements OnInit {
  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MainSitePages'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  ngOnInit(): void {
  }

}
