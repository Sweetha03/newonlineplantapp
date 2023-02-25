import { Component } from '@angular/core';
import { Seed } from '../seed';
import { SeedOperationService } from '../seed-operation.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  __seedService:SeedOperationService;
  router:Router;

  allSeed : Array<Seed> = [];
  watchlist : Array<Seed> = [];
  watchlistCount : number=0;
  

  priceHighCss: string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(seedService: SeedOperationService, router:Router)
  {
    this.__seedService = seedService;
    this.allSeed = this.__seedService.getSeedArr();
    this.router = router;
    console.log(this.allSeed.length);
    
  }

  viewSeedDetails(sid:string)
  {
    
    this.router.navigate(['seedDetails',sid]);
  }


  addToCart(seed:string)
  {
    let id = parseInt(seed);
    console.log("code to buy"+id+ "seed");
    
  }

  addToWatchlist(seed:string)
  {
    let addId = parseInt(seed);
    
    this.allSeed.forEach(s=>{
      if(s.id == addId)
      {
        this.watchlist.push(s);
        
      }
    });
    this.watchlistCount = this.watchlist.length;
    console.log(this.watchlist);
  }


  getFilterData(filterValue:string)
  {
    console.log("Filter Value "+filterValue);

    this.allSeed = this.__seedService.getSeedByBloomSeason(filterValue);
    
  }
  getFilterData1(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allSeed = this.__seedService.getSeedsByTypesOfSeeds(filterValue);
  }
 
  getFilterData2(filterValue:string)
  {
  
    console.log(" Filter Value "+filterValue);

    this.allSeed = this.__seedService.getSeedByStarRating(parseInt(filterValue));
  }

}


