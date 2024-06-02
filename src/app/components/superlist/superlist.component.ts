import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-superlist',
  templateUrl: './superlist.component.html',
  styleUrls: ['./superlist.component.css']
})
export class SuperlistComponent implements OnInit {

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
