import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-book';
  loadedFeature = 'recipe';

  constructor(private dataStorageService:DataStorageService){}
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  ngOnInit(): void {
    this.dataStorageService.fetchRecipes()
  }
}
