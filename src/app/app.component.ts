
/************************************************************************ *********
This is Spotify clone project of Dahye Lee
* ********************************************************************************/


import { Component } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Spotify-Clon';
  searchString = '';
  public token: any;
  private sub: any;

  constructor( private router: Router, private auth: AuthService ){}

  ngOnInit(): void {
    this.sub = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'], {});
  }

  handleSearch() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchString}});
    this.searchString = '';
  }
}
