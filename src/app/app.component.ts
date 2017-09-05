import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <!-- Interpolation -->
      <h1>{{'Page Header = ' + pageHeader}}</h1>
      <!-- ternary operator -->
      <h2>{{subHeader ? subHeader : 'There is no Sub-Header'}}</h2>
      <img src="{{imagePath}}"/>
      <employee></employee>
      <p>{{getFullName()}}</p>
    </div>
  `,
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  subHeader: string = '';
  imagePath: string = 'http://www.pragimtech.com/Images/Logo.JPG';
  firstName: string = 'Corey';
  lastName: string = 'Sader';

  getFullName() : string {
    return 'This application created by: ' + this.firstName + ' ' + this.lastName;
  }
}
