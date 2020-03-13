import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-edit-workplaces',
  templateUrl: './edit-workplaces.component.html',
  styleUrls: ['./edit-workplaces.component.scss']
})
export class EditWorkplacesComponent implements OnInit {

  constructor(private routte:ActivatedRoute , private myroutter:Router) { }

  days = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']

  //go to the previous page when click close
  goback(){
    this.myroutter.navigate(['/WorkPlaces'])
  }

  ngOnInit(): void {
  }

}
