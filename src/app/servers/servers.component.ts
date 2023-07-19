import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template:'<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  implements OnInit{

  allownewServer = false ;

  constructor(){
    
  }

  ngOnInit(): void {
    console.log('2');
        setTimeout(() => {
          this.allownewServer = true;
          
        }, 2000);
  }

}
