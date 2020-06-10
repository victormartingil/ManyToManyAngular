import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  form: FormGroup;
  image: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      imageCtrl: [this.image],
    });
   }

  ngOnInit(): void {
  }

  // saveImage(){
  //   this.image = this.form.get('imageCtrl').value;
  //   console.info('saveImage() = ', this.image);
  // }

  handleImage(event: any): void{
    this.image = event.target.files[0];
    console.info('handleImage() = ', this.image);
    console.info('form = ', this.form);
  }

  // uploadImage(image: any){
  //   this.http.post(api)
  // }

}
