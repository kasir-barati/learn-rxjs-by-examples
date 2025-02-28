# Observable

- Based on the idea of reactive programming.
- A data/event generator.
  - Been generated from various sources:
    - Arrays.
    - DOM events.
    - HTTP requests.
  - Anything can be converted to an observable.
  - Consume the data.
  - Returns them at various point in time.
- Has logic.
  - To get the data flow into the logic we wrote in the observable we need to subscribe to it.
- Once executed can publish 3 type of notifications:
  1. Next.
  2. Error.
  3. Complete.

> [!TIP]
>
> They are functions and we need to subscribe to them.

## Naming Convention

- [Finnish Notation](https://stackoverflow.com/a/59569720/8784518).

## Handlers

- No good if we do not have a handler for our observable. Because we will not see anything in this case.
  ```ts
  // A simple handler, just logging the data.
  observable$.subscribe((data) => console.log(data));
  ```
  Can perform more complex logic in the handler.
- For error handling you need to define an error handler:
  ```ts
  observable.subscribe({
    next(data) {
      console.log(data);
    },
    error(error) {
      console.error(error);
    },
  });
  ```
- Error notifications can receive an error object.
  - The errors in our `next` handler will be caught by this handler.
- Complete notifications can be emitted only once, and it signifies the end of a subscription.

> [!CAUTION]
>
> To teardown your observable you can utilize a function returned from the `subscribe` callback.
>
> ```ts
> new Observable<string>((subscriber) => {
>   // ...
>   return () => {
>     console.log('Cleaning up...');
>   };
> });
> ```

## Streams

- The corner stone of observables.
- The number of emitted values can be infinite.
- The emitted value can come at various point of times.

## Observer

- The logic which react to the emitted value.

```ts
const observer = {
  next: (data) => console.log(data),
  error: (error) => console.error(error),
  complete: () => console.log('Complete'),
};
observable$.subscribe(observer);
```

### Cancel a Subscription

```ts
const subscription = observable$.subscribe(observer);
subscription.unsubscribe();
```

### Multiple Subscriptions

- They will be executed independently.
- They will only receive the data emitted after the subscription.

```ts
const observable$ = new Observable((subscriber) => {
  subscriber.next(0);
  setTimeout(() => subscriber.next(500), 500);
  setTimeout(() => subscriber.next(1500), 1500);
  setTimeout(() => subscriber.next(1000), 1000);
});
observable$.subscribe(console.log);
setTimeout(() => {
  observable$.subscribe(console.log);
}, 1000);
```

## Subscriber

```ts
new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
});
```

## Marble Diagrams

- Visualizes the observables.
- The **approximate** representation of the emitted values in an observable.
