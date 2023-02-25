import { Component, OnInit } from '@angular/core';
import { SeedOperationService } from '../seed-operation.service';
import { Seed } from '../seed';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent implements OnInit {
  

  numberOfStars = [1, 2, 3, 4, 5];
  s: Seed = new Seed(0,'','','',0,0,'','',0,0,0);

  constructor(private seedService:SeedOperationService)
  {
 
  }
  ngOnInit(): void {
    
  }
  onSubmit()
  {
    console.log(this.s);
    this.doSaveTOServer();
  }
  
  doSaveTOServer()
  {
    this.seedService.addSeed(this.s).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
      },
      error => {
        console.log(error);
        
      }
     );
  }

 
}
