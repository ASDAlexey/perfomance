import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent implements OnInit {
  @Input() todos;

  constructor() {
  }

  ngOnInit() {
  }

  get runChangeDetection() {
    console.log('TodosComponent - Checking the view');
    return true;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
