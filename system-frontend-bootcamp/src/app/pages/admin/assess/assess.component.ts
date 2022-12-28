import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AssessService } from 'src/app/services/assess.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assess',
  templateUrl: './assess.component.html',
  styleUrls: ['./assess.component.css']
})
export class AssessComponent implements OnInit {

  public assessComponent = {
    assessName : '',
    assessSurname : '',
    assessPhoneNumber: '',
    assessEmail : '',
    assessLocation : '',
    assessAddress : '',
    assessRecomendation : '',
    assessSeller : '',
    assessDate : '',
    assessVehicle : '',
    assessKm : '',
    assessKg : '',
    assessComment : ''
  }

  constructor(private assessService:AssessService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.assessComponent.assessName.trim() == '' || this.assessComponent.assessName == null) {
      this.snackBar.open("El nombre es requerido", '', {
        duration: 3000
      })
      return ;
    }
    this.assessService.saveAssess(this.assessComponent).subscribe(
      (data:any) => {
        console.log(data);
        this.assessComponent.assessName = '';
        this.assessComponent.assessSurname = '';
        this.assessComponent.assessPhoneNumber = '';
        this.assessComponent.assessEmail = '';
        this.assessComponent.assessLocation = '';
        this.assessComponent.assessAddress = '';
        this.assessComponent.assessRecomendation = '';
        this.assessComponent.assessSeller = '';
        this.assessComponent.assessDate = '';
        this.assessComponent.assessVehicle = '';
        this.assessComponent.assessKm = '';
        this.assessComponent.assessKg = '';
        this.assessComponent.assessComment = '';
        Swal.fire('Categoria Agregada', 'La categria ha sido agregada con exito', 'success');
      },
      (errorAssessComponent) => {
        console.log(errorAssessComponent);
        Swal.fire('Error', 'Error al guardar la cotizacion', 'error')
      }
    )
  }

}
