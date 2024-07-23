import { Component, OnInit } from '@angular/core';
import { Indirizzo, rubricaModel } from '../models/models';
import { RubricaService } from '../rubrica.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent implements OnInit{

constructor(public ps:RubricaService){}
rubrica:rubricaModel[]=[]
indirizzo?:Indirizzo
show:boolean[]=[]

ngOnInit(): void {
  this.ps.getRubrica().subscribe(data=>{
this.rubrica=data;
console.log(this.rubrica);
this.show=new Array(this.rubrica.length).fill(false);
  })
}

showMore(index:number){
  if(!this.show[index]){
this.show[index]=true;
  }else{
    this.show[index]=false;
  }
}

}
