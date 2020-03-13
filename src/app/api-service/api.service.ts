import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from  '../crud-class/policy';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://localhost/Ramadan-Aman/backend';

  readPolicies(): Observable<Signup[]>{
    return this.httpClient.get<Signup[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }


  createPolicy(policy: Signup): Observable<Signup>{
    return this.httpClient.post<Signup>(`${this.PHP_API_SERVER}/api/create.php`, policy);
  }



  updatePolicy(policy: Signup){
    return this.httpClient.put<Signup>(`${this.PHP_API_SERVER}/api/update.php`, policy);   
  }



  deletePolicy(id: number){
    return this.httpClient.delete<Signup>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }






  constructor(private httpClient: HttpClient) {}
}