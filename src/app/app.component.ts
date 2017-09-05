import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{pageHeader}}</h1>
      <employee></employee>
    </div>
  `,
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
}
