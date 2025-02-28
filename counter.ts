import { Observable } from 'rxjs';

const counter$ = new Observable((subscriber) => {
  let count = 1;

  const interval = setInterval(() => subscriber.next(count++), 1000);

  return () => {
    console.log('Cleaning up...');
    clearInterval(interval);
  };
});

const subscription = counter$.subscribe((data) => console.log(data));

setTimeout(() => {
  subscription.unsubscribe();
}, 6000);
