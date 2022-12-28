import { Component, OnInit } from '@angular/core';
import { AssessService } from 'src/app/services/assess.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-assess',
  templateUrl: './view-assess.component.html',
  styleUrls: ['./view-assess.component.css']
})
export class ViewAssessComponent implements OnInit {

  viewAssessComponent:any = [

  ]

  constructor(private assessService:AssessService) { }

  ngOnInit(): void {
    this.assessService.listAssess().subscribe(
      (data:any) => {
        this.viewAssessComponent = data;
        console.log(this.viewAssessComponent);
      },
      (errorAssesView) => {
        console.log(errorAssesView);
        Swal.fire('ERROR!', 'Error al cargar las cotizaciones', 'error')
      }
    )
  }


}
