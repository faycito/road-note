import { Component } from '@angular/core';

@Component({
    selector: 'fines-and-penalties-page',
    templateUrl: 'fines-and-penalties.html'
})

export class FinesAndPenaltiesPage{
    penalties: any[] = [
        {
            violation: 'Illegal parking (towed)',
            fines: '€ 500'
        },
        {
            violation: 'No Contact Loading / Unloading in Prohibited Zone MMDA Reg. N°. 04-003 Series of 2004',
            fines: '€ 150.00'
        },
        {
            violation: "Driving without Driver's License",
            fines: '€  3000'
        }
    ]
    constructor(){}
}