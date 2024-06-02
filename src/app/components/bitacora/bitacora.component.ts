import { Component, OnInit } from '@angular/core';
import { bitacora } from 'src/app/models/bitacora.model';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {


  displayedColumns: string[] = ['servicio', 'fecha'];
  constructor() { }

  ngOnInit(): void {
  }

  bitacora: bitacora[] = [
    { servicio: 'Servicio A', fecha: '2024-05-31' },
    { servicio: 'Servicio B', fecha: '2024-05-30' },
    { servicio: 'Servicio C', fecha: '2024-05-29' }
  ];

}
