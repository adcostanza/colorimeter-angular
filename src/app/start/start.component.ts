import { Component, OnInit } from '@angular/core';
import {StartService} from './start.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers:[StartService]
})
export class StartComponent implements OnInit {

  constructor(private ss: StartService) { }
  start():void {
    this.ss.go().subscribe(res => {
      console.log(res);
    });
  }
  ngOnInit() {
  }

}
