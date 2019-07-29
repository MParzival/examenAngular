import { Component, OnInit } from '@angular/core';
import {MarqueVoiture} from '../models/marque-voiture';
import {Router} from '@angular/router';
import {MarqueVoitureService} from '../services/marque-voiture.service';

@Component({
  selector: 'app-add-marque-voiture',
  templateUrl: './add-marque-voiture.component.html',
  styleUrls: ['./add-marque-voiture.component.css']
})
export class AddMarqueVoitureComponent implements OnInit {
  marqueVoiture: MarqueVoiture;
  marques: MarqueVoiture[];
  private isLoading: boolean;
  constructor(private router: Router, public marqueVoitureService: MarqueVoitureService){ }

  ngOnInit() {
    this.marqueVoiture = new MarqueVoiture();
  }

  onSubmit() {
    this.marqueVoitureService.add(this.marqueVoiture).subscribe(then => {
      this.router.navigate(['/marque-voiture']);
    });
  }

}
