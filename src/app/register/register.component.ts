import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';
import { UserI } from '../interfaces/model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  registerForm!: FormGroup;
  submitted: boolean = false;
  constructor(private form: FormBuilder, private service: ServicesService, private router: Router){}
  ngOnInit(): void {
    this.registerForm = this.form.group({
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]]
    })
  }


  onSubmit(){
    console.log(this.registerForm.value);
    this.submitted= true;
    if(this.registerForm.valid){
      let user: UserI = this.registerForm.value;
      this.service.register(user).subscribe((data: any) => {
        console.log(data);
        alert("Sera redirigido a Login")
        this.router.navigate(['/login']);
      })
    }
    (error: any) => {
      if (error.status === 400) {
        alert('El usuario ya está registrado.');
        // Aquí puedes mostrar un mensaje de error al usuario o tomar alguna acción adicional.
      } else {
        alert('Ocurrió un error en el registro:');
      }
   }
  }
}