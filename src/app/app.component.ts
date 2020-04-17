import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string = "Andrés Mauricio";
  public lastName: string = "mauRicio AREVALO"
  public array: number[] = [1,2,3,4,5,6,7,8,9];
  public PI = Math.PI;
  public percet: number = 0.234;
  public money: number = 989365;
  public media: string = "https://www.youtube.com/embed/cpgTIcxt9Hs";
  public person: object = {
    name: "Andrés Mauricio",
    age: 23,
    title: "Frontend Developer"
  };

  public date: Date = new Date();

  public valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Llego la data!");
    },4500)
  });
}
