import axios from 'axios';

axios.get('https://swapi.dev/api/people/').then(response => {
  console.log(response);
});