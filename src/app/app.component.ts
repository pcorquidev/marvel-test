import { Component, OnInit } from '@angular/core';
import { Character } from './models/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'marvel-test'
  constructor() {}
  items: any [] = [];
  characters: Character[] = [
    {
      id: 1,
      name: "Deadpool",
      thumbnail: "https://i.pinimg.com/564x/a5/e7/f9/a5e7f9099965f33e3a51926daafcf0a8.jpg"
    },
    {
      id: 2,
      name: "Wolverine",
      thumbnail: "https://w0.peakpx.com/wallpaper/42/565/HD-wallpaper-wolverine-art-fantasy-hero-logan-marvel-sky-sun-war-x-men.jpg"
    }
  ];

  ngOnInit() {
    //this.getCharacters();
  }
}
