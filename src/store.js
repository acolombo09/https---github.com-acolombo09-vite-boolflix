import { reactive } from "vue";
import axios from "axios";

// Qui scriverò tutte le variabili che voglio rendere globali 
// per tutti i components, potrò leggerle e modificarle
// in qualsiasi punto della mia app
export const store = reactive({
  searchText: "",
  apiKey: "65ff2578e5da8719abf8bf6464f1c406",
})

// Creo la funzione (per eseguire la ricerca) da esportare in searchbar
// da invocare solo dopo il click del btn cerca
export function performSearch() {
  console.log("performSearch invocata");
}

