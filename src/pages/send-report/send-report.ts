import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
    selector: 'send-report-page',
    templateUrl: 'send-report.html'
})

export class SendReportPage {

    complainForm: FormGroup;
    imageFile;

    constructor(
        private formBuilder : FormBuilder,
        private _alertCtrl: AlertController,
        private _camera: Camera    
    ){
        this.setFomr();
    }

    getGallery(){
        let options : CameraOptions = {
            destinationType: this._camera.DestinationType.DATA_URL,
            sourceType: this._camera.PictureSourceType.PHOTOLIBRARY
        };

        this._camera.getPicture(options)
            .then( data => {
                this.imageFile = 'data:image/jpeg;base64,' + data;
            }, error => {
                console.log(error);
            })
    }

    setFomr(): void{
        this.complainForm = this.formBuilder.group({
            to: ['', Validators.required],
            subject: ['', Validators.required],
            content: ['', Validators.required]
        });
        this.imageFile = '';
    }
    onSubmit(data: any){
        if(this.imageFile) { data.image = this.imageFile};

        console.log(data);
        let alert = this._alertCtrl.create({
            title: 'Send Form',
            subTitle: 'Your form was send successfuly'
        });
        alert.present();
        this.setFomr();
    }
}