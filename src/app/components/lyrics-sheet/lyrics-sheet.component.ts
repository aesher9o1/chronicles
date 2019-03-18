import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-lyrics-sheet',
  templateUrl: './lyrics-sheet.component.html',
  styleUrls: ['./lyrics-sheet.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class LyricsSheetComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private sanitizer: DomSanitizer) { }
  public showContent: boolean = true;
  public showLyrics: boolean = false;
  public blog_post : String= "";

  ngOnInit() {
    this.blog_post = this.data["post"]
  }



  urlBuilder() {

    var number = this.data["soundcloud"]
    return this.sanitize(`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${number}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"`)
  }


  sanitize(url: string) {
    this.showContent = true;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  lyrics() {
    this.showLyrics=true
  }
}

