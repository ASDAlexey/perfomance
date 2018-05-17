import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MySelectComponent {
  @Input() options = [];

  change() {
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
