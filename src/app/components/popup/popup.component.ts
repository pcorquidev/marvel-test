import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Information } from '../../models/information.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  results: any[] = [];
    
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
              public dialogRef: MatDialogRef<PopupComponent>,
              public service: CharacterService) {}
  
  ngOnInit(): void {
    console.log("este es: ", this.data.id)
    this.service.getCharacterId(this.data.id).subscribe(
      data => {console.log(data)
        this.results = data.data.results;
        this.information = {
          id: this.results[0].id,
          name: this.results[0].name,
          description : this.results[0].description,
          imageUrl: this.results[0].thumbnail.path +'.'+ this.results[0].thumbnail.extension

        }
    });
  }
  
    public information: Information = {
        id: 1,
        name: "",
        description: "",
        imageUrl: ""
    };
  
    public onClose(): void {
      console.log(this.data.id)
      this.dialogRef.close();
    }
  }
