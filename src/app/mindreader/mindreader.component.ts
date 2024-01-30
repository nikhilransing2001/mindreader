import { Component } from '@angular/core';

@Component({
  selector: 'app-mindreader',
  standalone: true,
  imports: [],
  templateUrl: './mindreader.component.html',
  styleUrl: './mindreader.component.scss'
})
export class MindreaderComponent {
  computer_prediction:any;
  user_input:any;
  computer_score:number=0;
  user_score:number=0;
  max:number=1;
  min:number=0;
  winner:any;

  game(x:any)
  {
    this.user_input=x;
    this.computer_prediction = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    console.log(this.computer_prediction);
    if(this.computer_score!=3 && this.user_score!=3)
    {
      if (this.user_input==this.computer_prediction){
        this.computer_score++;
      }
      else{
        this.user_score++;
      }
    }
    if(this.computer_score==3)
    {
      this.winner="abe gadhade firse try kar";
    }
    else if(this.user_score==3)
    {
      this.winner="gadha ban ne se bacha gaya tu";
    }
    
  }

}
