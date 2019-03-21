import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

declare var myAct: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  	myAct();
    this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users);
      }
    );
  }


}

