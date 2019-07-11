import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToChat() {
    this.router.navigate(['chatbot']);
  }
}
