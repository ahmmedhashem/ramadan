import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-attendance',
  templateUrl: './edit-attendance.component.html',
  styleUrls: ['./edit-attendance.component.scss']
})
export class EditAttendanceComponent implements OnInit {

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/Attendance'])
  }

  ngOnInit(): void {
  }

}
