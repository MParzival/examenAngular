import { Component, OnInit } from '@angular/core';
import {Moto} from '../models/moto';
import {ActivatedRoute, Router} from '@angular/router';
import {MotoService} from '../services/moto.service';
import {MarqueMotoService} from '../services/marque-moto.service';
import {MarqueMoto} from '../models/marque-moto';

@Component({
  selector: 'app-edit-moto',
  templateUrl: './edit-moto.component.html',
  styleUrls: ['./edit-moto.component.css']
})
export class EditMotoComponent implements OnInit {
  motos: Moto[];
  moto: Moto;
  marques: MarqueMoto[];

  private isLoading: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(private motoService: MotoService, private router: Router, private route: ActivatedRoute, public marqueMotoService: MarqueMotoService) { }

  ngOnInit() {
    this.isLoading = true;
    this.motoService.getOneMoto(+this.route.snapshot.paramMap.get('id')).subscribe((data: Moto) => {
      this.moto = data;
      this.isLoading = false;
    });
    return this.marqueMotoService.getAll().subscribe((data: MarqueMoto[]) => {
      this.marques = data;
      this.isLoading = false;
    });
  }

  onSubmit() {
    this.motoService.updateMoto(this.moto).subscribe(then => {
      this.router.navigate(['/motos']);
    });
  }

}
