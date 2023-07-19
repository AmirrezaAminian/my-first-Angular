import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})


export class ServersComponent implements OnInit {
  allownewServer = false;
  serverCreationStatus = 'No server was created';
  serverName : string= 'TestServer'
  serverCreated = false ;

  constructor() {
    setTimeout(() => {
      this.allownewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true ;
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value ;
  }
}
