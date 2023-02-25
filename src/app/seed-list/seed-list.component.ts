import { Component } from '@angular/core';
import { Seed } from '../seed';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SeedOperationService } from '../seed-operation.service';

@Component({
  selector: 'app-seed-list',
  templateUrl: './seed-list.component.html',
  styleUrls: ['./seed-list.component.css']
})
export class SeedListComponent {
  __seedService: SeedOperationService;
  router: Router;
  allSeeds: Seed[] = [];

  constructor(private seedService: SeedOperationService, router: Router) {
    this.__seedService = seedService;
    this.router = router;
    seedService.getAllSeedsFromSpring().subscribe(
      data => {
        this.allSeeds = data;
      },
      err => {
        console.log("Error" + err);

      }
    );
  }

  viewSeedDetails(id: number,seedName: string, bloomSeason: string, typesOfSeeds: string, seedsStock: number, seedsPerPacket: number, about: string, discount: number, image: string, starRating: number, price: number)
   {
    localStorage.removeItem('id')
    localStorage.removeItem('seedName')
    localStorage.removeItem('bloomSeason')
    localStorage.removeItem('typesOfSeeds')
    localStorage.removeItem('seedsStock')
    localStorage.removeItem('seedsPerPacket')
    localStorage.removeItem('about')
    localStorage.removeItem('discount')
    localStorage.removeItem('starRating')
    localStorage.removeItem('price')
    localStorage.removeItem('image')

    localStorage.setItem("id", id + '');
    localStorage.setItem("seedName", seedName );
    localStorage.setItem("bloomSeason", bloomSeason);
    localStorage.setItem("typesOfSeeds", typesOfSeeds );
    localStorage.setItem("seedsStock", seedsStock + '');
    localStorage.setItem("seedsPerPacket", seedsPerPacket + '');
    localStorage.setItem("about", about );
    localStorage.setItem("discount", discount + '');
    localStorage.setItem("starRating", starRating + '');
    localStorage.setItem("price", price + '');
    localStorage.setItem("image", image );
    this.router.navigate(['seedDetails']);
  }

}
