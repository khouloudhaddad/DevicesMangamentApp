import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides = [
    {
      img: "../../../assets/images/slider/slider1.jpg",
      title: "Slider Text1",
      description:"Hello there a small description"
    },
    {
      img: "../../../assets/images/slider/slider2.jpg",
      title: "Slider Text1",
      description:"Hello there a small description"
    },
    {
      img: "../../../assets/images/slider/slider1.jpg",
      title: "Slider Text1",
      description:"Hello there a small description"
    },
    {
      img: "../../../assets/images/slider/slider2.jpg",
      title: "Slider Text1",
      description:"Hello there a small description"
    },
  ];
  slideConfig = { "slidesToShow": 1, "slidesToScroll":1, arrows:false, autoplay:true, autoplaySpeed:3000 };
  slickInit(e:any) {
    console.log('slick initialized');
  }

  breakpoint(e:any) {
    console.log('breakpoint');
  }

  afterChange(e:any) {
    console.log('afterChange');
  }

  beforeChange(e:any) {
    console.log('beforeChange');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
