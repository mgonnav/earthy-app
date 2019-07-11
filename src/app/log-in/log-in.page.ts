import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  @ViewChild('prompter') prompter:any;

  username: any;
  password: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  
  loginSuccess() {
    this.router.navigate(['story']);
  }
  promptError() {
    this.prompter.nativeElement.fontSize = '50px';
    this.prompter.nativeElement.style.color = "red";
    this.prompter.nativeElement.innerText = "Username or password incorrect. " +
                                            "Did you forget to register?";
  }

  onKeyUser(event:any) {
    this.username = event.target.value;
  }
  onKeyPass(event:any) {
    this.password = event.target.value;
  }

  login() {
    this.authService.login(this.username, this.password)

    setTimeout(() => {
      if (this.authService.loginServerResponse) this.loginSuccess();
      else this.promptError();
    }, 1000)
  }
}
