import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  constructor(private http: HttpClient) { }

  facebook_url = "https://graph.facebook.com/v3.2/524103774765675?fields=photos{images}&access_token=EAAHcq2tSAmsBADbPGGVKWwyhrJRTOe6ebY3g4qeSdHCDDDi1BI9NUU6WmNUcSS4hgkZAPCuInhNtZCffhTs2bHfZAAAh0hWkxDnbjL9QOw5L8PqWuTHthiMBTw58usZBcXA9ZCiLwzGM05qQDzfd3mcQZCD3tPIgas6ECKieZCGBvZBnbLT1ZCbUDf8XAaZCmO5DIZD";

  getPhotos() {
    return this.http.get(this.facebook_url);
  }
}
