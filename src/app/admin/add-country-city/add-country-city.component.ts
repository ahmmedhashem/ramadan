import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-add-country-city',
  templateUrl: './add-country-city.component.html',
  styleUrls: ['./add-country-city.component.scss']
})
export class AddCountryCityComponent implements OnInit {

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/CountriesCites'])
  }

  ngOnInit(): void {

    
  }

}
