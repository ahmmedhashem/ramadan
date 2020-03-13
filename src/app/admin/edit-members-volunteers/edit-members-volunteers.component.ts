import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-edit-members-volunteers',
  templateUrl: './edit-members-volunteers.component.html',
  styleUrls: ['./edit-members-volunteers.component.scss']
})
export class EditMembersVolunteersComponent implements OnInit {

  

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/MemberVolunteers'])
  }

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
