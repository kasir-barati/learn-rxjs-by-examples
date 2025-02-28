import { Axios } from 'axios-observable';

const axios = Axios.create({});
const observable$ = axios.get('https://reqres.in/api/users/2');

observable$.subscribe({
  next({ data, status }) {
    console.log(status);
    console.log(data);
  },
  complete() {
    console.info("And we're done, we've fetched all data we could!");
  },
  error(err) {
    console.error(err);
  },
});
