import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';


@Component({
    selector: 'send-a-complain-page',
    templateUrl: 'send-a-complain.html'
})

export class SendAComplainPage {

    complainForm: FormGroup;

    constructor(
        private formBuilder : FormBuilder,
        private _alertCtrl: AlertController
    ){
        this.setFomr();
    }

    setFomr(): void{
        this.complainForm = this.formBuilder.group({
            to: ['', Validators.required],
            subject: ['', Validators.required],
            content: ['', Validators.required]
        })
    }
    onSubmit(data: any){
        console.log(data);
        this.setFomr();
        let alert = this._alertCtrl.create({
            title: 'Send Form',
            subTitle: 'Your form was send successfuly'
        });
        alert.present();
    }
}