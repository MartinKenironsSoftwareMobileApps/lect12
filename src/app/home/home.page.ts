import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {alarm} from 'ionicons/icons';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

import { Toast } from '@capacitor/toast';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonButton, FormsModule, IonToolbar, IonIcon, IonTitle, IonContent],
})
export class HomePage {
  name:string = "Martin";
  constructor(private storage:Storage, private router:Router) {
    addIcons({alarm});
  }

 async OnButtonClick(){
    await this.storage.create();
    this.name = await this.storage.set('name', this.name);
  }

  async showToast(){
    // Show the splash for two seconds and then automatically hide it:
await SplashScreen.show({
  showDuration: 2000,
  autoHide: true,
});
    // await Toast.show({
    //   text: 'Hello!',
    // });

  }
}
