import { Component, OnInit } from '@angular/core';

import { ApiService2, Comments } from './api2.service';

@Component({
  selector: 'app-comments',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class AppComponent2 implements OnInit {
  title = 'Comments';
  dataIsAvailable: boolean;
  comments: Comments[];

  constructor(private apiService: ApiService2) {
    this.dataIsAvailable = false;
  }

  ngOnInit() {
    console.log("init app2");
    this.apiService.getComments().subscribe(comments => {
      console.log(comments);
      this.comments = comments;
      this.dataIsAvailable = true;
    });
  }
}
