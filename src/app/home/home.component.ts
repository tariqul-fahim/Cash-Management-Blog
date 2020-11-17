import { Component, Input, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() rcvName: string;

  constructor() { }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnChanges(){
    console.log('fire onchange method');
  }
  ngOnInit(): void {
    console.log('oninit method fired');
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngDoCheck(){
    console.log('docheck fired');
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterContentInit(){
    console.log('AfterContentInit fored');
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterContentChecked(){
    console.log('AfterContentChecked fired');
  }

}
