import { Savepath } from './../interfaces/savepath';
import { Component, OnInit } from '@angular/core';
import { IoService } from '../services/io.service';
import { reject } from 'q';
import { resolve } from 'path';
let os = window['os'];


@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent implements OnInit {

  constructor(private IO:IoService) { }
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
    
    this.IO.checkFileExist(this.saveDB).then((data: boolean)=>{
     
      if(data == true){
        console.log(data)
        this.IO.readAFile(this.saveDB).then((data: Savepath)=>{
          let saveJson = JSON.parse(data.toString());
          console.log(saveJson.data.saves)
          if(saveJson.data.saves != ""){
            this.selectedPath = saveJson.data.saves
          }
        })
      }
    });
  }

  chooseFile(data){
    console.log(data);
    this.selectedPath = data.target.files[0].path;
    this.fileName = data.target.files[0].name;
    if(this.siblings){
      this.setCleanPath(this.selectedPath);
    }
  }
  sibling(data){
    this.siblings = data.target.checked;
    console.log(this.siblings)
    if(this.siblings){
            if(this.selectedPath != this.defaultLabelText){
        this.setCleanPath(this.selectedPath);
      }
    }else{
      if(this.selectedPath != this.defaultLabelText){
        this.setOrgPath();
      }
    }
  }
  
  savePath(data){
    this.saveFilePath = data.target.checked;
   if(this.saveFilePath == true && this.selectedPath != this.defaultLabelText){
     if(this.thisOS == "win32"){
       this.winFix(`{"data": {"saves": "${this.selectedPath}"}}`).then((data)=>{
        this.IO.writeFile(this.saveDB, data);
       });
      
     }else{
      this.IO.writeFile(this.saveDB, `{"data": {"saves": "${this.selectedPath}"}}`)
     }
    
   }else if(this.saveFilePath == false || this.selectedPath == this.defaultLabelText){
    this.IO.writeFile(this.saveDB, '{"data": {"saves": ""}}')
   }
  }

  setCleanPath(path){
    var newPath = path.toString().replace(this.fileName, "");
    this.selectedPath = newPath;
    
  }

  setOrgPath(){
    this.selectedPath = this.selectedPath+this.fileName
  }

 winFix(jsonData: string){
   return new Promise((res, rej)=>{
     try{
     let newText = jsonData.toString().replace("\\" ,"\\\\");
      resolve(newText);
     }catch(error){
       reject(error);
     };
   });
   
 }

}
