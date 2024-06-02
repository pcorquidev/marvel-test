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
      name: "",
      thumbnail: ""
    },
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
