# `of` Operator

<table>
<thead>
<tr>
<th><code>of</code></th>
<th><code>new Observable</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>

```ts
of(1, 2, 3).subscribe({
  next: console.log,
  complete: () => {
    console.log('completed');
  },
});
```

</td>
<td>

```ts
new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
}).subscribe({
  next: console.log,
  complete: () => {
    console.log('completed');
  },
});
```

</td>
</tr>
</tbody>
</table>

## Our Own `of`

```ts
function of<T>(...args: T[]): Observable<T> {
  return new Observable((subscriber) => {
    for (const arg of args) {
      subscriber.next(arg);
    }
    subscriber.complete();
  });
}
```

> [!NOTE]
>
> As you can see implementing `of` is not that hard, however keep in mind that the `of` operator implemented by RxJS has some additional features and performance optimizations.
