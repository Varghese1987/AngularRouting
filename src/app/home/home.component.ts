import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [
  {
    head : "Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.",
    subHead: "Labore irure irure laborum quis tempor aliqua. Dude",
    date: "February 19, 2020"
  },
  {
    head:"Dolore pariatur amet ullamco aliquip mollit aliqua qui.",
    subHead:"Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.",
    date:"February 17, 2020"
  },
  {
    head:"Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.",
    subHead:"Adipisicing sit minim occaecat nulla proident exercitation do laboris.",
    date:"February 15, 2020"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
