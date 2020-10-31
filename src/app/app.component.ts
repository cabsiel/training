import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

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
      icon: 'book',
      url:'https://es.wikipedia.org/wiki/Realidad_aumentada'
    },
    { 
      label: 'shortcuts.entry2',
      icon: 'create',
      url:'https://ionicframework.com/'
    },
    { 
      label: 'shortcuts.entry3',
      icon: 'glasses',
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
      this.translate.setDefaultLang('es');
      this.statusBar.styleDefault();

      this.splashScreen.hide();
    });
  }

  changeLanguage(toolsMenu, index){
    this.translate.setDefaultLang(toolsMenu.value);
    this.selectedIndex =index
}
}
