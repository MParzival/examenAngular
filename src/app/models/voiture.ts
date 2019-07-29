import {MarqueVoiture} from './marque-voiture';

export class Voiture {

  id: number;
  name: string;
  marque: MarqueVoiture;
  nbPortes: number;
  annee: number;
  cout: number;
  nbKm: number;


  constructor(id?: number, name?: string, marque?: MarqueVoiture, nbPortes?: number, annee?: number, cout?: number, nbKm?: number) {
    this.id = id;
    this.name = name;
    this.marque = marque;
    this.nbPortes = nbPortes;
    this.annee = annee;
    this.cout = cout;
    this.nbKm = nbKm;
  }
}

