import { Component, OnInit } from '@angular/core';
import {Moto} from '../models/moto';
import {Router} from '@angular/router';
import {MotoService} from '../services/moto.service';
import {MarqueMotoService} from '../services/marque-moto.service';
import {MarqueMoto} from '../models/marque-moto';

@Component({
  selector: 'app-add-moto',
  templateUrl: './add-moto.component.html',
  styleUrls: ['./add-moto.component.css']
})
export class AddMotoComponent implements OnInit {

  moto: Moto;
  marques: MarqueMoto[];
  private isLoading: boolean;
  constructor(private motoService: MotoService, private router: Router, public marqueMotoService: MarqueMotoService) { }

  ngOnInit() {
    this.moto = new Moto();
    this.isLoading = true;
    return this.marqueMotoService.getAll().subscribe((data: MarqueMoto[]) => {
      this.marques = data;
      this.isLoading = false;
    });
  }
  onSubmit() {
    this.motoService.create(this.moto).subscribe(then => {
      this.router.navigate(['/motos']);
    });
  }

}
