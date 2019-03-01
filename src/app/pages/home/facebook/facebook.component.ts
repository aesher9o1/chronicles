import { Component, OnInit } from '@angular/core';
import { FacebookService } from 'src/app/services/facebook.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  mySlideImages = [];
  fetched = false;
  mySlideOptions = { items: 5, dots: false, nav: false, autoplay: true, autoplayTimeout: 4000, autoplayHoverPause: true, loop: true, slideTransition: 'linear' };


  constructor(private photos: FacebookService) { }

  ngOnInit() {

    //this.photos.getPhotos().subscribe();

      this.photos.getPhotos().subscribe(data => {
      var facebookImages = data["photos"]["data"];
      for (var i = 0; i < facebookImages.length; i++) {
        this.mySlideImages[i] = facebookImages[i]["images"][0]["source"];
      }
      this.fetched = true;
    });

  }

}
