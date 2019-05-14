import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {

  constructor() { }

  /**
 * Creates a cookie, defaults to the location.href and path / for cookie storage.
 * @param {*} cname the name of the cookie being set.
 * @param {*} cvalue The value of the cookie
 * @param {*} exdays number of days till expire
 * @param {*} allowedProtocol http or https optional
 */

 setCookie(cname, cvalue, exdays, allowedProtocol="http") {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  var secure = this.getProtocol();
  if (allowedProtocol == 'https') {
      if (secure == allowedProtocol) {
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;secure;httpOnly";
      }
  } else {
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}

 getCookie(cname: string) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

 checkCookie(cname: string) {
  var cookie = this.getCookie(cname);
  if (cookie != "") {
      return cookie;
  } else {
      return '';
  }
}

deleteCookie(cname: string){
  var cookie =  this.getCookie(cname);
  if(cookie){
    this.setCookie
  }
}

 getProtocol() {
  return location.protocol.replace(":", '');
}
  

}
