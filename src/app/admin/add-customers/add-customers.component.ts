import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent implements OnInit {

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/Customers'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  ngOnInit(): void {
  }

}
