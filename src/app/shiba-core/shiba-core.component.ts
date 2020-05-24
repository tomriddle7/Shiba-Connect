import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shiba-core',
  templateUrl: './shiba-core.component.html',
  styleUrls: ['./shiba-core.component.css']
})
export class ShibaCoreComponent implements OnInit {
  shibaImg: any;
  constructor(
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.callShiba();
  }
  onButtonClick() {
    this.callShiba();
  }

  callShiba() {
    this.http
    .get(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`)
    .subscribe((appdata) => {
      this.shibaImg = appdata;
  });
  }
}
