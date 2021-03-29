import Mixin from '@ember/object/mixin';

export interface ICalendar {
  foo: number;
}

export default Mixin.create({
  test(this: ICalendar) {
  },
});
