import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MarqueMoto} from '../models/marque-moto';
import {MarqueMotoService} from '../services/marque-moto.service';

@Component({
  selector: 'app-add-marque-moto',
  templateUrl: './add-marque-moto.component.html',
  styleUrls: ['./add-marque-moto.component.css']
})
export class AddMarqueMotoComponent implements OnInit {
  marqueMoto: MarqueMoto;
  marques: MarqueMoto[];
  private isLoading: boolean;
  constructor(private router: Router, public marqueMotoService: MarqueMotoService) { }

  ngOnInit() {
    this.marqueMoto = new MarqueMoto();
  }

  onSubmit() {
    this.marqueMotoService.add(this.marqueMoto).subscribe(then => {
      this.router.navigate(['/marque-moto']);
    });
  }

}
