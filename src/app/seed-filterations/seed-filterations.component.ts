import { Component } from '@angular/core';
import { SeedDto } from '../seed-dto';
import { SeedOperationService } from '../seed-operation.service';

@Component({
  selector: 'app-seed-filterations',
  templateUrl: './seed-filterations.component.html',
  styleUrls: ['./seed-filterations.component.css']
})
export class SeedFilterationsComponent {
  allSeeds: SeedDto[] = [];

  constructor(private seedService: SeedOperationService) {

  }

  getSeedName(seedName: string) {
    this.seedService.getDetailsBySeedName(seedName).subscribe(
      data => {
        this.allSeeds = data;
      },
      err => {
        console.log("Error " + err);

      }

    );
  }

  getSeedsByTypesOfSeeds(typesOfSeeds: string) {

    this.seedService.getDetailsBySeedType(typesOfSeeds).subscribe(
      data => {
        this.allSeeds = data;
      },
      err => {
        console.log("Error " + err);

      }
    );
  }

}
