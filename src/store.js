import axios from "axios";
import { reactive } from "vue";

// Qui scriverò tutte le variabili che voglio rendere globali 
// per tutti i components, potrò leggerle e modificarle
// in qualsiasi punto della mia app
export const store = reactive({
  searchText: "",
  apiKey: "65ff2578e5da8719abf8bf6464f1c406",
  query: ""
})

// Creo la funzione (per eseguire la ricerca) da esportare
// da invocare solo dopo il click del btn cerca
export function performSearch() {
  console.log("performSearch invocata");
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.query}`);

}

