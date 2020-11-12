import { Component, Input, OnInit } from '@angular/core';

interface GalleryList{
  imgUrl: string;
  title: string
}

@Component({
  selector: 'app-ng-for-input-gallery',
  templateUrl: './ng-for-input-gallery.component.html',
  styleUrls: ['./ng-for-input-gallery.component.scss']
})
export class NgForInputGalleryComponent implements OnInit {

  @Input() galleryList: GalleryList[];

  constructor() { }

  ngOnInit(): void {
  }

}
