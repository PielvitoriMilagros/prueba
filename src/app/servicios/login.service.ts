import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore: AngularFirestore) { }

  getUsuarios()
  {
    return this.firestore.collection("usuarios").snapshotChanges();
  }


}
