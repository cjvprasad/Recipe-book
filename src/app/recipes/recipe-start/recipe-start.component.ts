import { Component, OnChanges, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {

  constructor(private dataStorageService:DataStorageService) { 
  }
  
  ngOnInit(): void {
  
  }
  
 
}