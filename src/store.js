import { reactive, readonly } from "vue";



const state = reactive({
  eintraege: [],
});

const getters = {
};

const mutations = {
  eintragHinzufuegen(titel, typ, betrag, datum) {
    state.eintraege.splice(
      state.eintraege.length, 0,{
      id: new Date().getTime(),
      titel,
      typ,
      betrag: typ === "ausgabe" ? -Math.abs(betrag) : Math.abs(betrag),
      datum,
    });
    console.log(state.eintraege);       
  },
  removeTodo(todo) {
    state.eintraege.splice(state.eintraege.indexOf(todo), 1)
  }
};

export default {
  state: readonly(state),
  getters,
  mutations,
};
