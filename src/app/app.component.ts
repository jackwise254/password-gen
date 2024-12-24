import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  password = '';
  IncludeLetters = false;
  IncludeNumbbers = false;
  IncludeSymbols = false;
  onChangeLetters(){

    this.IncludeLetters = !this.IncludeLetters;

  }


  onChangeNumbers(){
    this.IncludeNumbbers = !this.IncludeNumbbers;
  }

  onChangeSymbols(){
    this.IncludeSymbols = !this.IncludeSymbols;
  }

  onButtonClicks(){
    this.password = "MY PASSWORD";
    console.log(this.IncludeLetters);
  }


}


