import { Component, OnInit } from '@angular/core';
import { BakeryService } from '../services/bakery.service';


@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent implements OnInit {

  constructor(private baker: BakeryService ) { }
  path = "filepath";
  defaultLabelText = "Select File"
  getCookie = this.baker.getCookie(this.path);
  selectedPath = this.defaultLabelText;
  siblings: boolean;
  cleanPath: string;
  saveFilePath: boolean;
  fileName: string;
  
  ngOnInit() {}

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
   console.log(this.saveFilePath)
  }

  setCleanPath(path){
    var newPath = path.toString().replace(this.fileName, "");
    this.selectedPath = newPath;
    
  }

  setOrgPath(){
    this.selectedPath = this.selectedPath+this.fileName
  }

 

}
