import { Component, OnInit } from '@angular/core';
import {MarqueMoto} from '../models/marque-moto';
import {MarqueMotoService} from '../services/marque-moto.service';
import {Moto} from '../models/moto';

@Component({
  selector: 'app-marque-moto',
  templateUrl: './marque-moto.component.html',
  styleUrls: ['./marque-moto.component.css']
})
export class MarqueMotoComponent implements OnInit {
  marqueMotos: MarqueMoto[];
  isLoading: boolean;
  constructor(public marqueMotoService: MarqueMotoService) { }

  ngOnInit() {
    this.isLoading = true;
    return this.marqueMotoService.getAll().subscribe((data: Moto[]) => {
      this.marqueMotos = data;
      this.isLoading = false;
    });
  }

  deleteMarqueMoto(id: number): void {
    this.isLoading = true;
    this.marqueMotoService.delete(id).subscribe(then => {
      this.marqueMotoService.getAll().subscribe((data: MarqueMoto[]) => {
        this.marqueMotos = data;
        this.isLoading = false;
      });
    });
  }

}
