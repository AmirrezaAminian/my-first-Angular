import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template:'<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  implements OnInit{

  allownewServer = false ;
  serverCreationStatus = 'No server was created' ;

  constructor(){
    setTimeout(() => {
      this.allownewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
      
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created'
  }

}
