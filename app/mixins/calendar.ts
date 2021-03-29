import Mixin from '@ember/object/mixin';

interface ICalendar {
  foo: number;
}

export default Mixin.create({
  test(this: ICalendar) {
  },
});
