import { Component, OnInit } from '@angular/core';
import {MarqueVoiture} from '../models/marque-voiture';
import {MarqueVoitureService} from '../services/marque-voiture.service';
import {Voiture} from '../models/voiture';

@Component({
  selector: 'app-marque-voiture',
  templateUrl: './marque-voiture.component.html',
  styleUrls: ['./marque-voiture.component.css']
})
export class MarqueVoitureComponent implements OnInit {
  marqueVoitures: MarqueVoiture[];
  isLoading: boolean;
  constructor(public marqueVoitureService: MarqueVoitureService) { }

  ngOnInit() {
    this.isLoading = true;
    return this.marqueVoitureService.getAll().subscribe((data: Voiture[]) => {
      this.marqueVoitures = data;
      this.isLoading = false;
    });
  }

  deleteMarqueVoiture(id: number): void {
    this.isLoading = true;
    this.marqueVoitureService.delete(id).subscribe(then => {
      this.marqueVoitureService.getAll().subscribe((data: MarqueVoiture[]) => {
        this.marqueVoitures = data;
        this.isLoading = false;
      });
    });
  }

}
