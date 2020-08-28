import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  searchString: string;

  ngOnInit(): void {
  }

  goGifs(form) {
  	location.href = `/outcome/${form.value.searchString}`;
  }
}