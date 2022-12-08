import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username" : "",
    "password": ""
  }

  constructor(private matSnackBar:MatSnackBar, private loginService:LoginService) { }

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
              console.log(user);
            })
          },(error) => {
            console.log(error);
          }
        )

    }
}
