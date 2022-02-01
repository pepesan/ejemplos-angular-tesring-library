import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass']
})
export class SecondComponent implements OnInit {

  name: string;
  grettingForm: FormGroup;
  gretting: string;

  constructor(private readonly formBuilder: FormBuilder) {
    this.name = "";
    this.gretting = "";
    this.grettingForm = this.formBuilder.group({
      name: ['']
    })
  }

  ngOnInit(): void {
  }

  grettingMe(): void {
    this.gretting = `Hola, ${this.grettingForm.controls.name.value}`;
  }

}
