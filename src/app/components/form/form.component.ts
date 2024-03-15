import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  public nameForm: string = 'Formulario Basico Reactive Forms Module.'
  public form1: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  public sibmited: boolean = false

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.form1 = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]]
    })
  }


  onSubmit() {

    if (this.form1.valid) {
      this.sibmited = true
      console.log('Todo correcto submited: ', this.sibmited)
    } else {
      this.sibmited = false
      console.log('Todo Incorrecto submited: ', this.sibmited)
    }
    console.log(this.form1.value.email, this.form1.value.password)
  }



}
