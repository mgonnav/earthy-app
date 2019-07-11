import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {
  @ViewChild('chatArea') chatArea:any;
  @ViewChild('userInput') userInput:any;

  username:string;
  message:string;
  message_id:number;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.message_id = 0;
    this.username = "admin";
    this.message = " ";
    this.send();
  }

  logout() {
    this.router.navigate(['auth-tabs/log-in']);
  }

  onKey(event:any) {
    if (event.target.type === "text")
      this.message = event.target.value;
  }

  send() {
    if (this.message_id) {
      this.chatArea.nativeElement.innerHTML += this.username + ': ' + this.message + '<br />';
      this.userInput.value = '';
    }
    const uri = encodeURI('http://earthy.mgonnav.com/api/server.php?chatting=true&username='+this.username+'&message='+this.message+'&message_id='+this.message_id);
    this.message = '';

    this.message_id = 1;
    this.http.get(uri)
      .subscribe(
        (data:any) => {
          if (data) {
            const response = JSON.parse(data);
            this.chatArea.nativeElement.innerHTML += response.response + '<br />';
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
