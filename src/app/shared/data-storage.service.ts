import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn:'root'
})
export class DataStorageService{
    constructor(private http:HttpClient,private recipeService:RecipeService){}
    url:string = "https://recipe-book-v4-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json"
    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.url,recipes).subscribe(res=>{
            console.log(res);
            
        })
    }
    fetchRecipes(){
        this.http.get<Recipe[]>(this.url).subscribe(
            recipes =>{
                this.recipeService.setRecipes(recipes)
            }
        )
    }
    
}