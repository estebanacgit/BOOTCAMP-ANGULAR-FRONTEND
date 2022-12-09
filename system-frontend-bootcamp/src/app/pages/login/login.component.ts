import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username" : '',
    "password": ''
  }

  constructor(private matSnackBar:MatSnackBar, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmitLogin() {
    if(this.loginData.username.trim() == ""){
      this.matSnackBar.open("El nombre de usuario es requerido", "Aceptar", {
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      })
        return;
      }

      if(this.loginData.password.trim() == ""){
        this.matSnackBar.open("La password es requerida", "Aceptar", {
          duration : 3000,
          verticalPosition : 'top',
          horizontalPosition : 'right'
        })
          return;
        }

        this.loginService.generateToken(this.loginData).subscribe(

            (data:any) => {
            console.log(data);
            this.loginService.loginUser(data.token);

            this.loginService.getCurrentUser().subscribe((user:any) => {

              this.loginService.setUsername(user);
              console.log(user);

              if(this.loginService.getUsernameRole() == "ADMIN") {

                //window.location.href = '/admin';
                this.router.navigate(['admin']);
                this.loginService.loginStatusSubjet.next(true);

              } else if (this.loginService.getUsernameRole() == "USUARIO") {

                //window.location.href = '/user-dashboard'
                this.router.navigate(['user-dashboard']);
                this.loginService.loginStatusSubjet.next(true);

              } else {

                this.loginService.logoutUser();

              }

            })
          },(error) => {
            console.log(error);
            this.matSnackBar.open('Detalles invalidos, volve a intentarlo',  'Aceptar', {
              duration : 3000
            });
          }
        )

    }
}
