import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;


@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/UserPrivileges'])
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
