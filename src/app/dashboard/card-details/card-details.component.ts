import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { IFilterCategory } from 'src/app/shared/models/IFilterCategory.model';
import {filter} from "rxjs";
import {SearchCriteria} from "../../shared/models/SearchCriteria.model";
declare var jQuery: any;

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  searchCriteriaData :any;

  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    this.getJSON();
  }
  ngAfterViewInit() {jQuery('.dropdown').dropdown()}

  public getJSON() {
   this.http.get("./assets/Data/car-data.json").subscribe((data)=>{
     this.searchCriteriaData = data;
   });
  }

  handleSearchCriteria($event: SearchCriteria) {
    const filterCriteria =  <SearchCriteria> $event;
    this.searchCriteriaData =this.searchCriteriaData.filter((data:any)=> data.brand == filterCriteria.brand || data.color == filterCriteria.color ||
    data.year == filterCriteria.year || data.fuel == filterCriteria.fuel ||  data.shift == filterCriteria.shift
      || data.model == filterCriteria.model);

  }
}
