import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import { Alumno } from './../clase/alumno';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

//  formAlumno : FormGroup;

  constructor(private route : ActivatedRoute, private fb: FormBuilder, private router : Router) { }

  ngOnInit(): void { }

  nombreControl = new FormControl('User');

  //initForm(modiicado : Alumno){
    //this.formAlumno = this.fb.group({
    formAlumno = this.fb.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      edad : ['', Validators.required],
      materia : ['', Validators.required],
      cursada : ['', Validators.required]
    });
  //}

 enviar(){
  let alumnoTemp : Alumno =this.formAlumno.value;
  this.router.navigate(['planilla-component', alumnoTemp]);
  debugger;
 } 

}
