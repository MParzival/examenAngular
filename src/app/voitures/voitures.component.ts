import { Component, OnInit } from '@angular/core';
import {Voiture} from '../models/voiture';
import {VoitureService} from '../services/voiture.service';
import {MarqueVoitureService} from '../services/marque-voiture.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
  voitures: Voiture[];
  isLoading: boolean;
  constructor(private voitureService: VoitureService, public marqueVoitureService: MarqueVoitureService) { }

  ngOnInit() {
    this.isLoading = true;
    return this.voitureService.getVoitures().subscribe((data: Voiture[]) => {
      this.voitures = data;
      this.isLoading = false;
    });
  }

  deleteVoiture(id: number): void {
    this.isLoading = true;
    this.voitureService.delete(id).subscribe(then => {
      this.voitureService.getVoitures().subscribe((data: Voiture[]) => {
        this.voitures = data;
        this.isLoading = false;
      });
    });
  }

}


