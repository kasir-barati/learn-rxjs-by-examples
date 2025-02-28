import { Observable, Observer } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  subscriber.next('Alice');
  subscriber.next('fell in love with');

  // subscriber.complete();
  subscriber.error(new Error('Something went wrong'));

  setTimeout(() => {
    subscriber.next('Charlie');
    subscriber.complete();
  }, 2000);

  // Will be invoked as the last step, after completion/error events
  return () => {
    console.log('Cleaning up...');
  };
});
const observer: Observer<string> = {
  next(data) {
    console.log(data);
  },
  complete() {
    console.log('And they got married!');
  },
  error(err) {
    console.log(err);
  },
};

observable$.subscribe(observer);
