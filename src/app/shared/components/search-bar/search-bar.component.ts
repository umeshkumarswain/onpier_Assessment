import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {SearchCriteria} from '../../models/SearchCriteria.model';
import {IFilterCategory} from '../../models/IFilterCategory.model'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {
  @Input()
  searchCriteriaData: any;
  searchCriteria: SearchCriteria = {brand: [], color: [], model: [], shift: [], fuel: [], year: []};
  searchCriteriaFilterData: SearchCriteria = {brand: [], color: [], model: [], shift: [], fuel: [], year: []};
  @Output()
  selectedFilterOptionsEventEmitter = new EventEmitter<SearchCriteria>();
  //selectedOptions: searchCriteriaFilterData = [];


  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["searchCriteriaData"] != null) {
      console.log(changes["searchCriteriaData"])
      this.searchCriteriaData?.forEach((car: any) => {
        this.searchCriteria.brand.push(car.brand);
        this.searchCriteria.color.push(car.color);
        this.searchCriteria.shift.push(car.shift);
        this.searchCriteria.year.push(car.year);
        this.searchCriteria.model.push(car.model);
        this.searchCriteria.fuel.push(car.fuel);
      });
    }
  }

  selectedOption(category: string, selectValue: string) {
    switch (category)  {
      case "brand":
        this.searchCriteriaFilterData.brand = [selectValue];
        break;
      case "color":
        this.searchCriteriaFilterData.color = [selectValue];
        break;
      case "model":
        this.searchCriteriaFilterData.model = [selectValue];
        break;
      case "shift":
        this.searchCriteriaFilterData.shift = [selectValue];
        break;
      case "fuel":
        this.searchCriteriaFilterData.fuel = [selectValue];
        break;
      case "year":
        this.searchCriteriaFilterData.year = [selectValue];
        break;
      default:
        break;
    }


    this.selectedFilterOptionsEventEmitter.emit(this.searchCriteriaFilterData);
  }
}
