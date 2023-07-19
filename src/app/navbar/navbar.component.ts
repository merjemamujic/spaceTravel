import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  
  constructor(private router: Router) { }

  onTabChanged(event :any){
      console.log(event);
      if(event.index === 0){
        this.router.navigate([''])
      }

      if(event.index === 1){
            console.log("destination");
            this.router.navigate(['destination'])
      }

      if(event.index === 2){
        console.log("crew");
        this.router.navigate(['crew'])
      }

      if(event.index === 3){
        console.log("technology");
        this.router.navigate(['technology'])
      }
  }
  
}
// this.router.navigate(['first'])
