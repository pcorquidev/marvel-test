import { Component, OnInit } from '@angular/core';
import { Bitacora } from 'src/app/models/bitacora.model';
import { BitacoraService } from '../../services/bitacora.service';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {


  displayedColumns: string[] = ['servicio', 'fecha'];
  constructor(private bitacoraService: BitacoraService) { }

  ngOnInit(): void {

    this.bitacoraService.getAllBitacora().subscribe(
      data => {
        this.bitacora = data
      }
    )
  }

  bitacora: Bitacora[] = [
  ];


}
