import axios from "axios";
import { reactive } from "vue";

// Qui scriverò tutte le variabili che voglio rendere globali 
// per tutti i components, potrò leggerle e modificarle
// in qualsiasi punto della mia app
export const store = reactive({
  searchQuery: "",
  searchResults: [],
})

export function searchMedia() {
  const apiKey = "65ff2578e5da8719abf8bf6464f1c406";
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${store.searchQuery}`;

  axios
    .get(url)
    .then((response) => {
      store.searchResults = response.data.results;
      // console.log(this.searchResults);
    })
    .catch(error => {
      console.error(error);
    });
}