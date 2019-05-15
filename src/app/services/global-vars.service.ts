import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

  constructor() { }
  watchFile: string;
  watchDir: boolean;

  private watchFileObserv = new Subject();
  private watchDirObserv = new Subject();
  

  setWatchFileListener(){
    return this.watchFileObserv.asObservable();
  }

  setWatchDirListener(){
    return this.watchDirObserv.asObservable();
  }

  getWatchFilePath(path: string){
    this.watchFile = path;
    return this.watchFileObserv.next(this.watchFile);
  }
  getWatchFileDir(dir: boolean){
    this.watchDir = dir;
    return this.watchDirObserv.next(this.watchDir);
  }

  setHidden(target){
    let elm = document.querySelector(target);
    elm.style.display = "none";
  }
  setShow(target){
    let elm = document.querySelector(target);
    elm.style.display = "block";
  }
}
