import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  constructor(private http: HttpClient) { }

  facebook_url = "https://graph.facebook.com/v3.2/2158172151102570?fields=photos{images}&access_token=EAAhwBOXgDZCEBAJLYwupUAvn9brphNkXTR0hyJjChHOFbD3Dg4qYdWUVCZA4abSG3QNDDEQ6Do5cZAyolMChh27DwSvjBuyCuWdeN7KkZBFcuRZBZAvaYOsKZBHVLYM7EjSM6pb4gcCEz29dssSs3hC7VwWPT2oqvms6v8ADoTBZCOhcs6SbZC4lVRmO0PUCt1fsZD";

  getPhotos() {
    return this.http.get(this.facebook_url);
  }
}
