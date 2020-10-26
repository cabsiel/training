import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService
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
}
