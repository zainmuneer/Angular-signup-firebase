import { Injectable } from '@angular/core';
import {
  collection,
  doc,
  docData,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { filter, from, map, Observable, of, switchMap } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { ProfileUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore:Firestore,  private authService:AuthenticationService) { }


}
