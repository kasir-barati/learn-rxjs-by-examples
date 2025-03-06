# `fromEvent` Operator

- Enables us to create an observable from various event sources.
- It takes a DOM event, NodeJS `EventEmitter`, or other event sources.
- They never ends, so make sure to unsubscribe if you need that.
- The producer of the observable is outside of the observable itself, thus it is a "hot" observable.
  - This means that new subscribers will only receive events that occur after the subscription.

<table>
<thead>
<tr>
<th><code>fromEvent</code></th>
<th><code>new Observable</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>

```ts
const button = document.getElementById('myButton');
fromEvent<MouseEvent>(button, 'click').subscribe({
  next: (event) => {
    console.log(event.type, event.x, event.y);
  },
  complete: () => {
    console.log('completed');
  },
});
```

</td>
<td>

```ts
const button = document.getElementById('myButton');
const click$ = new Observable<MouseEvent>((subscriber) => {
  const listener = button.addEventListener('click', (event) => {
    subscriber.next(event);
  });

  return () => {
    button.removeEventListener('click', listener);
  };
});

click$.subscribe({
  next: (event) => {
    console.log(event.type, event.x, event.y);
  },
  complete: () => {
    console.log('completed');
  },
});
```

</td>
</tr>
</tbody>
</table>

> [!CAUTION]
>
> When we use the `Observable` class we have to provide a teardown callback in order to prevent memory leaks, and unwanted code execution!
