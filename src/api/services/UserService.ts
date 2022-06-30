import { Firestore, getDoc, FirestoreError, collection, doc, setDoc, updateDoc, query, orderBy, startAt, endAt, getDocs, } from 'firebase/firestore';
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { getTranslation } from '../../utils/FirebaseErrorTranslate';
import { db } from '..';

class UserService {
  private auth: Auth;
  private db: Firestore;

  constructor() {
    this.db = db;
    this.auth = getAuth();
  }

  async create({ name, email, password }) {
    try {
      const userCreated = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCreated;
    }
    catch (err: any) {
      const error: FirestoreError = err;;
      return Promise.reject(getTranslation(error.code));
    }
  }

  async login({ password, email }) {
    try {
      const userLogged = await signInWithEmailAndPassword(this.auth, email, password);
      return userLogged;
    }
    catch (err: any) {
      const error: FirestoreError = err;;
      return Promise.reject(getTranslation(error.code));
    }
  }
    

  async saveHairSchedule(params: [{ name: string; step: number; }]) {
    try {
      const docRef = doc(collection(this.db, 'schedules'));
      await setDoc(docRef, {
        data: params,
        createdAt: new Date(),
      });

      const snapshot = await getDoc(docRef);
      return snapshot.data();
    }
    catch (err: any) {
      const error: FirestoreError = err;
      return Promise.reject(getTranslation(error.code));
    }
  }

  async listHairSchedule() {
    try {
      const q = query(collection(this.db, 'schedules'));
      const snapshot = await getDocs(q);
      const schedules = [];

      snapshot.forEach(res => schedules.push(res.data()))

      return schedules;
    }
    catch (err: any) {
      const error: FirestoreError = err;
      return Promise.reject(getTranslation(error.code));
    }
  }
}

export default new UserService();