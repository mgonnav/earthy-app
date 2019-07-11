import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginServerResponse:boolean;
  signupServerResponse:boolean;
  constructor(private http: HttpClient) { }

  login(user:string, pass:string) {
    this.http.get(`http://earthy.mgonnav.com/api/server.php?login=true&username=${user}&password=${pass}`)
      .subscribe(
        (data:any) => {
          const response = JSON.parse(data);
          this.loginServerResponse = response.success;
        },
        (error) => {
          console.error(error);
        }
      );
    // async login(user:string, pass:string) {
    //   let headers = new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   });
    //   let options = {
    //     headers: headers
    //   };
    //   const params = {
    //     login: true,
    //     username: user,
    //     password: pass
    //   }
    //   return await this.http.post('http://earthy.mgonnav.com/api/server.php', params, options)
    //     .subscribe(
    //       (data:any) => {
    //         const response = JSON.parse(data);
    //         console.log(response.success);
    //         // if(response.success) this.loginSuccess();
    //       },
    //       (error) => {
    //         console.error(error);
    //       }
    //     );
    // }
  }

  signup(user:string, pass:string) {
    this.http.get(`http://earthy.mgonnav.com/api/server.php?signup=true&username=${user}&password=${pass}`)
      .subscribe(
        (data:any) => {
          const response = JSON.parse(data);
          this.signupServerResponse = response.success;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
