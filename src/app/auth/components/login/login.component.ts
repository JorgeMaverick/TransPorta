import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import { firebaseConfig } from '../firebase.conf';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router } from '@angular/router';



//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private auth: AngularFireAuth, private formBuilder: FormBuilder,private localStorageService: LocalStorageService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }


    login(email: string, password: string) {
      this.auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Inicio de sesión exitoso
          const user = userCredential.user;
          console.log('Usuario ha iniciado sesión:', user);
          // Aquí puedes redirigir a la página principal u otro componente después del inicio de sesión
        })
        .catch((error) => {
          // Manejo de errores
          console.error('Error al iniciar sesión:', error);
          // Muestra el error en tu interfaz de usuario o toma la acción correspondiente
        });
    }


    onSubmit() {
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
        // Aquí puedes agregar la lógica para autenticar al usuario con los datos ingresados
        console.log('Email:', email);
        console.log('Password:', password);
        this.login(email,password)
        // Llamar a tu servicio o método para autenticar al usuario
      }
    }

    goHome(){
      this.router.navigate(['/home/trucks']);
    }


}
// token angular fire 1//05N7HeQNLHtiGCgYIARAAGAUSNwF-L9Ir-n0XeZI1HqdAgs4oDuQT5eO839nT4iOteeuFVdU3mpQyvGZHmawj-DPmWIkcg9s-1wY
