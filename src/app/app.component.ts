import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public toolsMenu = [
    {
      title: 'home.menu.entry1',
      value: 'es'
    },
    {
      title: 'home.menu.entry2',
      value: 'ca'
    },
    {
      title: 'home.menu.entry3',
      value: 'en'
    }
  ];
  public shortcuts = [
    { 
      label: 'shortcuts.entry1',
      url:'https://es.wikipedia.org/wiki/Realidad_aumentada'
    },
    { 
      label: 'shortcuts.entry2',
      url:'https://ionicframework.com/'
    },
    { 
      label: 'shortcuts.entry3',
      url:'https://blogthinkbig.com/realidad-aumentada-origen'
    }
  ];

  clickedImage: string;

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private camera: Camera
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.setDefaultLang('es');
      this.selectedIndex = 0
    });
  }

  ngOnInit() {

  }

  changeLanguage(toolsMenu, index){
      this.translate.setDefaultLang(toolsMenu.value);
      this.selectedIndex =index
  }

  captureImage() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }
}
