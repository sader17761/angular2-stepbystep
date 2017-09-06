import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {
  columnSpan: number = 2;
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  gender: string = 'Male';
  age: number = 20;
}
