import { Component } from '@angular/core';

@Component({
    selector: 'warning-alert',
    templateUrl: './warningalert.component.html',
    styles: [
        `
        h1 {
        padding: 40px;
        background-color: palegreen;
        border: 5px solid red;        
    }
        `
    ]  
})
export class WarningAlertComponent  {

}
