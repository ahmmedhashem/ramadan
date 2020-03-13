import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-edit-country-city',
  templateUrl: './edit-country-city.component.html',
  styleUrls: ['./edit-country-city.component.scss']
})
export class EditCountryCityComponent implements OnInit {

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/CountriesCites'])
  }

  ngOnInit(): void {
    //to hide placeholder on form focus
    $('[placeholder]').focusin(function () {
      $(this).attr('data-text', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
      }).blur(function () {
      $(this).attr('placeholder', $(this).attr('data-text'));
    });
  }

}
