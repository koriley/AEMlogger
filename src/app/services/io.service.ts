import { Injectable } from '@angular/core';
// let fs = require('fs');
let fs = window['fs'];

@Injectable({
  providedIn: 'root'
})
export class IoService {

  constructor() { }
  
//This is IO code written for node and adapted to angular.
//to -- adapt to ts standards as needed --
 readAFile(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8',  (err, data) => {
            if (err) {
                reject("An error ocurred reading the file :" + err.message);
                return;
            } else {
                resolve(data);
            }
        });
    });
}

 writeFile(filepath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("File Written");
            }
        });
    })
}

 getDirContents(dir) {
    return new Promise((resolve, reject) => {
        var files = {};
        var fileNames = [];
        try {
            fs.readdirSync(dir).forEach(async (fileName) => {
               
                fileNames.push({
                    "name": fileName,

                })
                files = { "files": fileNames }

            });
            resolve(files);
        } catch (error) {
            reject(error);
        }

    })
}

 checkFileExist(path) {
    return new Promise((resolve, reject) => {
        if (!path) {
            reject("Path is invalid " + path)
        }
        try {
            fs.access(path, fs.F_OK, (err) => {
                if (err) {
                    resolve(false+ err);
                }
                resolve(true);
            });
        } catch (error) {
            reject("error");
        }
    });
}

async  checkType(path){
    return new Promise(async (resolve, reject)=>{
        try{
           
            await fs.lstat(path, (err, stats) => {

                if(err){
                    reject(new Error(`${err}`));
                }
                   
                   if(stats.isFile()){
                       resolve("file");
                   }else if(stats.isDirectory()){
                    resolve("dir");
                   }else{
                       reject(new Error("File type unknown in scope"))
                   }
                
            
            });
        }catch(error){
            reject(new Error(`${error}`));
        }
    });
}

 checkDirExist(dir) {
    return new Promise((resolve, reject) => {
        try {
            if (fs.existsSync(dir)) {
                resolve("true");
            } else {
                resolve("false");
            }

        } catch (error) {
            reject(error);
        }
    });
}

 createDir(dir) {
    return new Promise((resolve, reject) => {
        try {
            fs.mkdirSync(dir);
            resolve("done");
        } catch (error) {
            reject(error);
        }
    });
}

//  removeSpace(string) {
//     return new Promise((resolve, reject) => {
//         try {
//             var cleanString = string.replace(/\s/g, spaceChar);
//             resolve(cleanString);
//         } catch (error) {
//             reject(error);
//         }
//     })


// }

//  addSpace(string) {

//     return new Promise((resolve, reject) => {
//         try {
//             var addSpace = new RegExp(spaceChar, "g")
//             var cleanString = string.replace(addSpace, /\s/);
//             resolve(cleanString);
//         } catch (error) {
//             reject(error);
//         }
//     })
// }

}
