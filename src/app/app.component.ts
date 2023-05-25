import { Component,OnInit } from '@angular/core';
import { initializeApp,FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Database, getDatabase, ref, set, onValue  } from "firebase/database";
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Chat } from './chat';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firechat';
  app: FirebaseApp;
  db: Database;
  form: FormGroup;
  username = '';
  message = '';
  chats: Chat[] = [];


  constructor( private formBuilder: FormBuilder ) {
    this.app = initializeApp(firebaseConfig);
    this.db = getDatabase(this.app);
    this.form = this.formBuilder.group({
      'message' : [],
      'username' : []
    });
  }

  onChatSubmit(form: any) {
    const chat = form;
    chat.timestamp = new Date().toString();
    chat.id = uuidv4();
    set(ref(this.db, 'chats/${chat.id}'), chat);
    this.form = this.formBuilder.group({
      'message' : [],
      'username' : [chat.username],
    });
  }

  ngOnInit(): void {
    const chatsRef = ref(this.db, 'chats');
    onValue(chatsRef, (snapshot: any) => {
      const data = snapshot.val();
      for(let id in data) {
        if (!this.chats.map(chat => chat.id).includes(id)) {
          this.chats.push(data[id])
        }
      }
    });
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyDGjjZFKzslni0oZrlU8ASMvwywO-4M8WU",
  authDomain: "app-chat-669b6.firebaseapp.com",
  projectId: "app-chat-669b6",
  storageBucket: "app-chat-669b6.appspot.com",
  messagingSenderId: "1086060538736",
  appId: "1:1086060538736:web:b758afe639166d3e8b7db5",
  measurementId: "G-SK920Z56DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


