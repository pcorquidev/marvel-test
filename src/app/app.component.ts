import { Component, OnInit } from '@angular/core';
import { Character } from './models/character.model';
import { CharacterService } from './services/character.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './components/popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'marvel-test'
  constructor(private characterService: CharacterService, public dialog: MatDialog) {}
  items: any;
  results: any[] = [];
  thumbnail: string = "";

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

  ngOnInit(): void {
    this.getCharacters();
  }

  public getCharacters(): void {
    this.characterService
              .getAllCharacters()
              .subscribe(
                  items => {
                    this.items = items;
                    this.results = items.data.results;
                    //this.thumbnail = this.results.includes("thumbnail");
                    console.log("characters = ",this.results);
                  }
    )
  }

  public openPopup(id: number): void {
    this.dialog.open(PopupComponent, {
      width: '400px',
      data: { id: id}
    })
  }
 }
