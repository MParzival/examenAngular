import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Moto} from '../models/moto';
import {MotoService} from '../services/moto.service';

@Component({
  selector: 'app-detail-moto',
  templateUrl: './detail-moto.component.html',
  styleUrls: ['./detail-moto.component.css']
})
export class DetailMotoComponent implements OnInit {
  moto: Moto;
  id: number;
  isLoading: boolean;
  motos: Moto[];

  constructor(private route: ActivatedRoute, public motoService: MotoService, public router: Router) { }

  ngOnInit() {
    this.motoService.getOneMoto(+this.route.snapshot.paramMap.get('id')).subscribe((data: Moto) => {
      this.moto = data;
      this.isLoading = false;

    });
  }

  deleteMoto(id: number): void {
    this.isLoading = true;
    this.motoService.delete(id).subscribe(then => {
      this.motoService.getMotos().subscribe((data: Moto[]) => {
        this.motos = data;
        this.isLoading = false;
      });
    });
  }
}
