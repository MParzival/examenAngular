import { Component, OnInit } from '@angular/core';
import {Moto} from '../models/moto';
import {MotoService} from '../services/moto.service';


@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})
export class MotosComponent implements OnInit {

  motos: Moto[];
  isLoading: boolean;
  constructor(public motoService: MotoService) { }

  ngOnInit() {
    this.isLoading = true;
    return this.motoService.getMotos().subscribe((data: Moto[]) => {
      this.motos = data;
      this.isLoading = false;
    });
  }

  deleteMoto(id: number): void {
    this.isLoading = true;
    this.motoService.delete(id).subscribe(then => {
      this.motoService.getMotos().subscribe((data: Moto[]) => {
        this.motos = data;
        this.isLoading = false;
      });
    });
  }

}

