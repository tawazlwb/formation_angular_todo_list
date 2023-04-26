import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ? Dependency injection in Angular : inject what you want in the router
  constructor(private router: Router) {
    // ? Other ways of navigating in an application
    // this.router.navigate(['/']);
    // this.router.navigateByUrl('/add-todo');
  }
}
