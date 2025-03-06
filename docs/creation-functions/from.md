# `from` Operator

- Convert other types to `Observable`, e.g. arrays, promises, etc.
  - We might want to convert a promise to an observable so that we can use it with `Observable` operators.

<table>
<thead>
<tr>
<th>Arrays</th>
<th>Promises</th>
</tr>
</thead>
<tbody>
<tr>
<td>

```ts
from([1, 2, 3]).subscribe({
  next: console.log,
  complete: () => console.log('completed'),
});
```

</td>
<td>

```ts
from(Promise.resolve(1)).subscribe({
  next: console.log, // Will be called on resolution
  error: console.error, // Will be called on rejection
  complete: () => console.log('completed'), // Will be called after resolution
});
```

</td>
</tr>
</tbody>
</table>
