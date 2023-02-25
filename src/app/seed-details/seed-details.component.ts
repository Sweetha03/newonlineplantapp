import { Component } from '@angular/core';


@Component({
  selector: 'app-seed-details',
  templateUrl: './seed-details.component.html',
  styleUrls: ['./seed-details.component.css']
})
export class SeedDetailsComponent {
    id: string='';
    seedName: string='';
    bloomSeason: string='';
    typesOfSeeds: string='';
    seedsStock: string='';
    seedsPerPacket: string='';
    about: string='';
    discount: string='';
    price: string='';
    starRating: string='';
    image: string='';
  

  constructor()
  {
    this.id=localStorage.getItem("id") ||'';
    this.seedName=localStorage.getItem("seedName") ||'';
    this.bloomSeason=localStorage.getItem("bloomSeason") || '';
    this.typesOfSeeds=localStorage.getItem("typesOfSeeds") ||'';
    this.seedsStock=localStorage.getItem("seedsStock") || '';
    this.about=localStorage.getItem("about") ||'';
    this.image=localStorage.getItem("image") || '';
    this.discount=localStorage.getItem("discount") || '';
    this.price=localStorage.getItem("price") ||'';
    this.starRating=localStorage.getItem("starRating") || '';
    
   
  }

}
