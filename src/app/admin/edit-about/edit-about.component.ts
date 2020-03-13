import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.scss']
})
export class EditAboutComponent implements OnInit {

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MainSitePages'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  ngOnInit(): void {
  }

}
