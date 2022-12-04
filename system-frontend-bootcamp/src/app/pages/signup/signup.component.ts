import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
   username : "",
   password: "",
   name: "",
   surname: "",
   email: "",
   numberphone: ""
  }

  constructor(private userService : UserService, private matSnackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.matSnackBar.open('El nombre de usuario es requerido!', 'Aceptar', {
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema', 'success')
      }, (error) => {
        console.log(error);
        this.matSnackBar.open('Ha ocurrido un error en el sistema!', 'Aceptar', {
          duration : 3000
        });
      }
    )
  }

}
