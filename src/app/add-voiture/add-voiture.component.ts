import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../services/voiture.service';
import {Router} from '@angular/router';
import {Voiture} from '../models/voiture';
import {MarqueVoiture} from '../models/marque-voiture';
import {MarqueVoitureService} from '../services/marque-voiture.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {
  voiture: Voiture;
  marques: MarqueVoiture[];
  private isLoading: boolean;
  constructor(private voitureService: VoitureService, private router: Router, public marqueVoitureService: MarqueVoitureService) { }

  ngOnInit() {
    this.voiture = new Voiture();
    this.isLoading = true;
    return this.marqueVoitureService.getAll().subscribe((data: MarqueVoiture[]) => {
      this.marques = data;
      this.isLoading = false;
    });
  }

  onSubmit() {
    this.voitureService.create(this.voiture).subscribe(then => {
      this.router.navigate(['/voitures']);
    });
  }
}
