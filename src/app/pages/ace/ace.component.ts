import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.css']
})
export class AceComponent implements OnInit {

  constructor(public auth:AuthService) { 
    this.auth.open = "0%"; dfgdfgdfgdfg
  }

  ngOnInit() {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
