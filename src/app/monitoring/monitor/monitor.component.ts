import { Component, OnInit } from '@angular/core';
import { IoService } from '../../services/io.service';
import { GlobalVarsService } from '../../services/global-vars.service';
import { readFile } from 'fs';
import { Filechange } from '../../interfaces/filechange';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  constructor(private IO: IoService, private global: GlobalVarsService) { }
  filePath: string;
  fileDir: boolean;
  fileContents;
  watching;
  ngOnInit() {

    this.global.setWatchFileListener().subscribe((data: string) => {
      console.log(data)
      this.filePath = data;
      this.global.setWatchDirListener().subscribe((dir: boolean) => {
        this.fileDir = dir
        console.log(dir)
        if (this.fileDir) {
          console.log("is true")
        } else {
          this.readFile();
        }
      })
    });
  }

  readFile(){
    this.IO.readAFile(this.filePath).then((data)=>{

      this.fileContents = data.toString().split(/\r?\n/);
      this.IO.streamRead(this.filePath);
       this.IO.getStreamListener().subscribe((data)=>{
        console.log(data)
        this.fileContents = data.toString().split(/\r?\n/);
        // if(data.event == "change"){
        //  this.IO.readAFile(data.file).then((data)=>{
        //   this.fileContents = data.toString().split(/\r?\n/);
        //  })
        // }
       
      })
    });
  }
}
