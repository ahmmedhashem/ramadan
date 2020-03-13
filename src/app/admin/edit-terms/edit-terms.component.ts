import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-edit-terms',
  templateUrl: './edit-terms.component.html',
  styleUrls: ['./edit-terms.component.scss']
})
export class EditTermsComponent implements OnInit {

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MainSitePages'])
  }

  //to add another list
  addList(){
    let list = $(".cont").html();
    $(".cont").append(list);

  }


  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  ngOnInit(): void {
    var x = $(".cont").html();
    console.log(x);
  }

}
