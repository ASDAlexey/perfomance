import { Component } from '@angular/core';

class Skill {
  constructor(private _id, private _name) {
  }

  get id() {
    console.log('Checking id: ', this._id);
    return this._id;
  }

  get name() {
    console.log('Checking name: ', this._name);
    return this._name;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  skills: Skill[] = [new Skill(1, 'JS'), new Skill(2, 'CSS'), new Skill(3, 'Angular')];

  trigger() {
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  addOption() {
    const randowNumber = this.getRandomArbitrary(1, 999999);
    // this.skills.push(new Skill(randowNumber, `${randowNumber} JS`));
    this.skills = [...this.skills, ...new Skill(randowNumber, `${randowNumber} JS`)];
    console.log(this.skills);
  }
}
