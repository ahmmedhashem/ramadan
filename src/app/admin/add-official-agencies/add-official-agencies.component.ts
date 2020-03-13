import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-add-official-agencies',
  templateUrl: './add-official-agencies.component.html',
  styleUrls: ['./add-official-agencies.component.scss']
})
export class AddOfficialAgenciesComponent implements OnInit {

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/OfficialAgencies'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  ngOnInit(): void {
  }

}
