import { Component } from '@angular/core';

// import { CustomerService } from './customer/customer.service';
// import { CustomersComponent } from './customer/customers.component';

// here is my barrel // future i would just import './customer'
import { CustomersComponent, CustomerService } from './customer/index';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent],
    providers: [CustomerService]
})
export class AppComponent { 
    title = 'Customer App';
    name = 'Douglas';
    wardsColor = 'green';

    changeSuitColor() {
        this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
    }
}
