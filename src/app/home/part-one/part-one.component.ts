import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.scss']
})
export class PartOneComponent implements OnInit {
  //names: String[]=["Ikbal bara","Tariqul islam","jibon bara","sakib bara"];
  @Input() forHome: String;

  num:Number;

  constructor() { }

  ngOnInit(): void {
    this.num=+this.forHome+6611;
    setTimeout(()=>{
      console.log(this.num);
      
    },3000);
    
  }
  change(){
    //this.istrue=!this.istrue
  }


}
