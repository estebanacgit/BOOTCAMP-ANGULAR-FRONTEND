import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user:any = null;

  constructor(public loginNavbar:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.loginNavbar.isLoggedIn();
    this.user = this.loginNavbar.getUsername();
    this.loginNavbar.loginStatusSubjet.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.loginNavbar.isLoggedIn();
        this.user = this.loginNavbar.getUsername();
      }
    )
  }

  public logoutNavbar(){
    this.loginNavbar.logoutUser();
    window.location.reload();
  }

}
