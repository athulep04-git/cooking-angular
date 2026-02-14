import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipes:any[],searchKey:string): any {
    let results:any=[]
    if(!recipes||searchKey==''){
      return recipes
    }
    else{
      results=recipes.filter((item:any)=>item.name.toLowerCase().trim().includes(searchKey.toLocaleLowerCase().trim()))
      return results
    }
    
  }
}
