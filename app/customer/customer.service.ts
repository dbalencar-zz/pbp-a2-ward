import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers() {
        return [
            { id: 1, name: 'Douglas' },
            { id: 2, name: 'Braga' },
            { id: 3, name: 'de' },
            { id: 4, name: 'Alencar' }
        ];
    }

}