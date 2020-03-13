import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-edit-official-agencies',
  templateUrl: './edit-official-agencies.component.html',
  styleUrls: ['./edit-official-agencies.component.scss']
})
export class EditOfficialAgenciesComponent implements OnInit {

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/OfficialAgencies'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  ngOnInit(): void {
  }

}
