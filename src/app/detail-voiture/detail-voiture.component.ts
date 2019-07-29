import { Component, OnInit } from '@angular/core';
import {Voiture} from '../models/voiture';
import {VoitureService} from '../services/voiture.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.css']
})
export class DetailVoitureComponent implements OnInit {
  voiture: Voiture;
  id: number;
  isLoading: boolean;
  voitures: Voiture[];

  constructor(private route: ActivatedRoute, public voitureService: VoitureService, public router: Router) { }

  ngOnInit() {
    this.voitureService.getOneVoiture(+this.route.snapshot.paramMap.get('id')).subscribe((data: Voiture) => {
      this.voiture = data;
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
