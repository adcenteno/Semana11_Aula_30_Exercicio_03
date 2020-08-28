import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private aR: ActivatedRoute, private gS: GifsService) { }
  searchString: string;
  gifs: any = [];

  ngOnInit(): void {
    this.aR.params.subscribe(params => {
      this.searchString = params['searchString'];
      this.gS.getGifs(this.searchString).subscribe(gifs => {
        this.gifs = gifs;
      });
    });
  }
  goHome() {
  	location.href = '';
  }  
}