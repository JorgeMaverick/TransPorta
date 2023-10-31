import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  todoItems: any = [];
  newItem: string = '';
  showModal: boolean = false;
  //showForm: boolean = false;
  taskForm: FormGroup;

  tripPlan: any = []

  constructor(private formBuilder: FormBuilder, private localStorageService: LocalStorageService, private router: Router) {
    this.taskForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      empresa: ['', Validators.required],
      origenDireccion: ['', Validators.required],
      destinoDireccion: ['', Validators.required],
      telefonoContacto: ['', Validators.required],
      tipoCarga: ['Tipo_de_carga', Validators.required],
      fechaViaje: ['', Validators.required],
      precio: [0, Validators.required]
    });
  }

  ngOnInit() {
    this.todoItems = JSON.parse(this.localStorageService.getItem('trips'))
    //this.localStorageService.setItem('welcome',123)
  }



  addItem() {
    if (this.newItem.trim() !== '') {
      this.todoItems.push(this.newItem);
      this.newItem = ''; // Reiniciar el valor para el próximo elemento
    }
  }

  saveTask() {
    console.log('Guardando tarea:', this.taskForm.value);
    if (this.taskForm.valid) {
      this.todoItems.push(this.taskForm.value);
      this.newItem = ''; // Limpiar el valor del campo
      this.showModal = false; // Cerrar el diálogo
      this.taskForm.reset()
    }
    console.log(this.todoItems)

    this.localStorageService.setItem('trips', JSON.stringify(this.todoItems))

  }

  toggleCollapse(id: number): void {
    const tarea = this.todoItems.find((t: any) => t.id === id);
    if (tarea) {
      tarea.collapsed = !tarea.collapsed;
    }
  }

  seleccionarTarea(tarea: any) {
    this.tripPlan.push(tarea)
  }




  goToPlanTrip() {
    console.log(this.tripPlan)
    // Inicializa la variable presupuesto en 0
    let presupuesto = 0;

    // Recorre cada elemento del array y suma el valor de 'precio' a 'presupuesto'
    this.tripPlan.forEach((tarea: any) => {
      presupuesto += tarea.precio || 0; // Asegúrate de manejar el caso si 'precio' no está definido
    });

    console.log('El presupuesto total es:', presupuesto);
    let data = {
      ...this.tripPlan,
      presupuesto
    }

    this.localStorageService.setItem('tripsSelected',JSON.stringify(data))
    this.router.navigate(['/home']);
  }
  goHome(){
    this.router.navigate(['/home']);

  }

}
