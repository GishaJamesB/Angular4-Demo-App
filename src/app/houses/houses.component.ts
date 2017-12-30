import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { House } from '../house';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HousesComponent implements OnInit {
  houses: House[];
  selectedHouse: House;

  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.getHouses();
  }

  getHouses(): void {
    this.houseService.getHouses()
    .subscribe(houses => this.houses = houses);
  }
  onSelect(house: House): void {
    this.selectedHouse = house;
  }

}
