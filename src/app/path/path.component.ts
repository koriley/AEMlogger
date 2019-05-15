import { Savepath } from './../interfaces/savepath';
import { Component, OnInit } from '@angular/core';
import { IoService } from '../services/io.service';
import { GlobalVarsService } from '../services/global-vars.service';

let os = window['os'];


@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent implements OnInit {

  constructor(private IO: IoService, private watcher: GlobalVarsService) { }
  path = "filepath";
  defaultLabelText = "Select File"
  saveDB = './save.json';
  selectedPath = this.defaultLabelText;
  siblings: boolean;
  cleanPath: string;
  saveFilePath: boolean;
  fileName: string;
  thisOS = os.platform();

  ngOnInit() {

    this.IO.checkFileExist(this.saveDB).then((data: boolean) => {

      if (data == true) {
        console.log(data)
        this.IO.readAFile(this.saveDB).then((data: Savepath) => {
          let saveJson = JSON.parse(data.toString());
          this.siblings = saveJson.data.dir;
          this.fileName = saveJson.data.fileName;
          this.saveFilePath = saveJson.data.saved
          if (saveJson.data.saves != "") {
            this.selectedPath = saveJson.data.saves
          }
        })
      }
    });
  }

  chooseFile(data): void {
    console.log(data);
    this.selectedPath = data.target.files[0].path;
    this.fileName = data.target.files[0].name;
    if (this.siblings) {
      this.setCleanPath(this.selectedPath);
    }
  }
  sibling(data): void {
    this.siblings = data.target.checked;
    console.log(this.siblings)
    if (this.siblings) {
      if (this.selectedPath != this.defaultLabelText) {
        this.setCleanPath(this.selectedPath);
        this.setSavePath();
      }
    } else {
      if (this.selectedPath != this.defaultLabelText) {
        this.setOrgPath();
        this.setSavePath();
      }
    }
  }

  savePath(data): void {
    this.saveFilePath = data.target.checked;
    this.setSavePath();
  }

  setCleanPath(path): void {
    var newPath = path.toString().replace(this.fileName, "");
    this.selectedPath = newPath;
    this.setSavePath();

  }

  setSavePath(): void {
    if (this.saveFilePath == true && this.selectedPath != this.defaultLabelText) {
      if (this.thisOS == "win32") {
        let winData = this.winFix(`{"data": {"saves": "${this.selectedPath}", "dir":${this.siblings}, "fileName":"${this.fileName}", "saved":${this.saveFilePath}}`);
        this.IO.writeFile(this.saveDB, winData);

      } else {
        this.IO.writeFile(this.saveDB, `{"data": {"saves": "${this.selectedPath}", "dir":${this.siblings}, "fileName":"${this.fileName}", "saved":${this.saveFilePath}}}`)
      }

    } else if (this.saveFilePath == false || this.selectedPath == this.defaultLabelText) {
      this.IO.writeFile(this.saveDB, `{"data": {"saves": "", "dir":${this.siblings}, "fileName":"", "saved":${this.saveFilePath}}}`)
    }
  }

  setOrgPath() {
    this.selectedPath = this.selectedPath + this.fileName
  }

  winFix(jsonData: string): void {


    let newText = jsonData.toString().replace("\\", "\\\\");


  }


  startMonitoing(target): void {
    this.watcher.getWatchFilePath(this.selectedPath);
    this.watcher.getWatchFileDir(this.siblings);
    let elm = document.querySelector(target);
    elm.style.display = "none"
    // console.log(elm)
  }

}

