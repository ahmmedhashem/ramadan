import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.scss']
})
export class EditCustomersComponent implements OnInit {

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/Customers'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  ngOnInit(): void {
  }

}
