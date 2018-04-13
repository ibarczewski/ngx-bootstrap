import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CalendarCellViewModel } from '../../models/index';

@Component({
  selector: '[bsDatepickerMonthDecorator]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // '[class.disabled]': 'day.isDisabled',
    // '[class.is-highlighted]': 'day.isHovered',
    // '[class.is-other-month]': 'day.isOtherMonth',
    // '[class.in-range]': 'day.isInRange',
    // '[class.select-start]': 'day.isSelectionStart',
    // '[class.select-end]': 'day.isSelectionEnd',
    '[class.selected]': 'month.isSelected'
  },
  template: `{{ month.label }}`
})
export class BsDatepickerMonthDecoratorComponent {
  @Input() month: CalendarCellViewModel;
}
