import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 


  // get_admin_info(): void {
  //   this.info_service.getAll().subscribe(
  //     (res: Login[]) => {
  //       this.login_info = res;
  //       console.log(res);

  //     },
  //     (err) => {
  //       this.error = err;
  //     }
  //   );
  // }



//   senddata(f) {
//     this.error = '';
//     this.success = '';

//     this.info_service.createAdmin(this.login)
//       .subscribe(
//         (res: Login[]) => {
//           // Update the list of cars
//           this.login_info = res;

//           // Inform the user
//           this.success = 'Created successfully';

//           // Reset the form
//           f.reset();
//         },
//         (err) => this.error = err
//       );
// }

  constructor() { 
    
  
  }



  

  ngOnInit(): void {
   
    
  }
  

 }
