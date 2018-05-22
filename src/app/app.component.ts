import { Component } from '@angular/core';

class Skill {
  constructor(private _id: number, private _name: string) {
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
  todos = [{ id: 1, title: 'One' }, { id: 2, title: 'Two' }];

  trigger() {
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  addOption() {
    const randowNumber = this.getRandomArbitrary(1, 999999);
    // this.skills.push(new Skill(randowNumber, `${randowNumber} JS`));
    const newData = new Skill(randowNumber, `${randowNumber} JS`);
    this.skills = [...this.skills, ...newData];
    console.log(this.skills);
  }

  add() {
    this.todos = [...this.todos, { title: 'Three' }];
  }
}
