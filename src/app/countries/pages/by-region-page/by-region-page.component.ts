import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  countries: Country[] = [];
  regions: Region[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  searchregion(region: Region): void {
    if (this.selectedRegion === region) return;

    this.selectedRegion = region;
    this.countriesService
      .searchRegion(region)
      .subscribe((countries) => (this.countries = countries));
  }
}
