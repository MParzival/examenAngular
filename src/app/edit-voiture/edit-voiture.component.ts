import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../services/voiture.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Voiture} from '../models/voiture';
import {MarqueVoitureService} from '../services/marque-voiture.service';
import {MarqueVoiture} from '../models/marque-voiture';

@Component({
  selector: 'app-edit-voiture',
  templateUrl: './edit-voiture.component.html',
  styleUrls: ['./edit-voiture.component.css']
})
export class EditVoitureComponent implements OnInit {
  voitures: Voiture[];
  voiture: Voiture;
  marques: MarqueVoiture[];
  private isLoading: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private voitureService: VoitureService, private router: Router, private route: ActivatedRoute, public marqueVoitureService: MarqueVoitureService) { }


  ngOnInit() {
    this.isLoading = true;
    this.voitureService.getOneVoiture(+this.route.snapshot.paramMap.get('id')).subscribe((data: Voiture) => {
      this.voiture = data;
      this.isLoading = false;
    });
    return this.marqueVoitureService.getAll().subscribe((data: MarqueVoiture[]) => {
      this.marques = data;
      this.isLoading = false;
    });
  }

  onSubmit() {
    this.voitureService.updateVoiture(this.voiture).subscribe(then => {
      this.router.navigate(['/voitures']);
    });
  }

}
