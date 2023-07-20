import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles : [`
  .true{
    border: none;
    background-color:rgb(31, 142, 206) ;
    border-radius: 15px;
    padding: 1rem 2rem;
    color: black;
  }`]
   
})
export class AppComponent {
  title = 'my-first-app';
  name = 'Amirreza'


  showSecret: any = false;
  log = [] ;
 
  addNum(){
    this.showSecret =!this.showSecret
    this.log.push(this.log.length + 1) ;
  }


  

}
