import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.swapInput()
  }

  swapInput(){
    if(document.getElementById('swap-input')?.style.getPropertyValue("flex-direction") === "column-reverse"){
      document.getElementById('swap-input')?.style.setProperty("flex-direction","column ")
      document.getElementById('moeda')?.setAttribute("disabled","false")
      document.getElementById('moeda-con')?.setAttribute("disabled","true")
    }else if(document.getElementById('swap-input')?.style.getPropertyValue("flex-direction") !== "column-reverse"){
      document.getElementById('swap-input')?.style.setProperty("flex-direction","column-reverse")
      document.getElementById('moeda')?.setAttribute("disabled","true")
      document.getElementById('moeda-con')?.setAttribute("disabled","false")
    }
  }
}
