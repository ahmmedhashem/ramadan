import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-edit-city-supervisors',
  templateUrl: './edit-city-supervisors.component.html',
  styleUrls: ['./edit-city-supervisors.component.scss']
})
export class EditCitySupervisorsComponent implements OnInit {

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/CitySupervisors'])
  }

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  ngOnInit(): void {
    //to hide placeholder on form focus
    $('[placeholder]').focusin(function () {
      $(this).attr('data-text', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
      }).blur(function () {
      $(this).attr('placeholder', $(this).attr('data-text'));
    });

    //show password when hover eye icon (convert type from password to text)
	var PassFild = $(".password") 
	$(".show-pass").hover(function () {
		PassFild.attr('type', 'text');
	}, function(){
		PassFild.attr('type', 'password');
	});
  }

}
