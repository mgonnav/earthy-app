import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  @ViewChild('prompter') prompter:any;

  username:string;
  password:string;
  cpassword:string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  detectEnter(event: any) {
    if (event.keyCode == 13)
      this.signup()
  }

  onKeyUser(event: any) {
    this.detectEnter(event);
    this.username = event.target.value;
    console.log(this.username);
  }
  onKeyPass(event: any) {
    this.detectEnter(event);
    this.password = event.target.value;
    console.log(this.password);
  }
  onKeyCpass(event: any) {
    this.detectEnter(event);
    this.cpassword = event.target.value;
    console.log(this.cpassword);
  }

  signupSuccess() {
    this.prompter.nativeElement.style.color = "green";
    this.prompter.nativeElement.innerText = "Registration successful" +
                                            "You can now log in!";
    this.router.navigate(['auth-tabs/log-in']);
  }
  promptError() {
    this.prompter.nativeElement.innerText = "That username is already in use!";
  }

  signup() {
    this.prompter.nativeElement.style.color = "red";
    if (!this.username)
      this.prompter.nativeElement.innerText = "You need a username"
    else if (!this.password)
      this.prompter.nativeElement.innerText = "You need a password"
    else if (this.password !== this.cpassword)
      this.prompter.nativeElement.innerText = "Passwords don't match";
    else {
      this.authService.signup(this.username, this.password);
      setTimeout(() => {
        if (this.authService.signupServerResponse) this.signupSuccess();
        else this.promptError();
      }, 1000);
    }
  }
}
