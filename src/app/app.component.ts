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
      <!-- Property Binding -->
      <button [disabled]='isDisabled'>Click Me</button>
      <!-- Interpolation (this doesn't work with interpolation, you must use property binding)-->
      <button disabled='{{isDisabled}}'>Click Me</button>
      <span [innerHtml]="details"></span>
      <!-- both interpolation and property binding sanitize the code before displaying -->
      <div>{{badHtml}}</div>
      <div [innerHtml]='badHtml'></div>
    </div>
  `,
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  subHeader: string = '';
  imagePath: string = 'http://www.pragimtech.com/Images/Logo.JPG';
  firstName: string = 'Corey';
  lastName: string = 'Sader';
  isDisabled: boolean = false;
  details: string = 'Employee Details';
  badHtml: string = 'Hello <script>alert("Hacked!");</script> World!';

  getFullName() : string {
    return 'This application created by: ' + this.firstName + ' ' + this.lastName;
  }
}
