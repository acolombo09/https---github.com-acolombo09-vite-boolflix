import { reactive } from "vue";

// Qui scriverò tutte le variabili che voglio rendere globali 
// per tutti i components, potrò leggerle e modificarle
// in qualsiasi punto della mia app
export const store = reactive({
  searchText: "",
})

// Creo la funzione (per eseguire la ricerca) da esportare in searchbar
// da invocare solo dopo il click del btn cerca
export function performSearch() {
  console.log("performSearch invocata");
}

