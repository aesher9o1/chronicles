import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LyricsSheetComponent } from 'src/app/components/lyrics-sheet/lyrics-sheet.component';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase, private sanitizer: DomSanitizer,private lyricsSheet: MatBottomSheet) { }
  ngOnInit() {
    this.items = this.db.list('blog').valueChanges();
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  bottomSheetTrigger(item) {
    this.lyricsSheet.open(LyricsSheetComponent,{
      data: item,
      closeOnNavigation: true
    })
  }

}
