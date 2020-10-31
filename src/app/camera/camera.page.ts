import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-cameraPage',
  templateUrl: 'camera.page.html',
  styleUrls: ['camera.page.scss']
})
export class CameraPage {
  currentImage: any;

  constructor(public photoService: PhotoService) {  }

  ngOnInit() {
    this.photoService.loadSaved();
  }

}