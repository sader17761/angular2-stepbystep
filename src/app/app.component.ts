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
      <!-- Dom values and attribute values are two different things...Dom values can change, where attribute values can not. -->
      <div><input id='inputId' type="text" value='Tom'></div>
      <!-- Class Binding ... you can also use negation [class.boldClass]='!applyBoldClass'-->
      <h3>Class Binding</h3>
      <button class="colorClass" [class]='classesToApply'>Class Binding Button</button>
      <button class="colorClass" [class.boldClass]='applyBoldClass'>Class Binding Button</button>
      <button class="colorClass" [ngClass]='addClasses()'>Class Binding Button</button>
      <!-- Style Binding -->
      <h3>Style Binding</h3>
      <button style='color:blue;' [style.font-weight]="isBold ? 'bold' : 'normal'">Style Binding Button</button>
      <button style='color:green;' [style.font-size.px]="fontSize">Style Binding Button</button>
      <button style='color:orange;' [ngStyle]="addStyles()">Style Binding Button</button>
      <!-- Event Binding: data flows in the opposite direction: from HTML to Component-->
      <h3>Event Binding</h3>
      <button (click)='onClick()'>Event Binding Button</button>
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
  classesToApply: string = 'italicsClass boldClass';
  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = true;
  isBold: boolean = true;
  fontSize: number = 14;
  isItalic: boolean = true;

  //Event Binding
  onClick() : void {
    console.log('Event Button Clicked!');
  }

  addStyles() {
    let styles = {
      'font-size.px' : this.fontSize,
      'font-weight' : this.isBold ? 'bold' : 'normal',
      'font-style' : this.isItalic ? 'italic' : 'normal'
    };
    return styles;
  }

  addClasses() {
    let classes = {
      boldClass : this.applyBoldClass,
      italicsClass : this.applyItalicsClass
    };
    return classes;
  }

  getFullName() : string {
    return 'This application created by: ' + this.firstName + ' ' + this.lastName;
  }
}
