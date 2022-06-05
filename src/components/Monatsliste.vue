<template>
    <article class="monatsliste">
        <h2>
            <span class="monat-jahr">
                {{ monat }}</span><span :class='"monatsbilanz" + " " + zustand'>
                    {{ bilanz.toFixed(2).replace(/\./, ",") }} €
                </span>
            </h2>
        <ul>
            <Eintrag v-for="(item, index) in items" :key="index" :item="item" />
        </ul>
    </article>
</template>

<script>
import Eintrag from './Eintrag.vue';
import Store from "../store";

export default {
    data() {
        return {
            eintraege: Store.state.eintraege,
        }
    },
    props: {
        monat: String
    },
    computed: {
        items() {
            return this.eintraege.filter((e) =>
                new Date(e.datum).toLocaleString("de-DE", {
                    month: "long",
                    year: "numeric",
                }) === this.monat
            ).sort((a, b) => new Date(b.datum) - new Date(a.datum));
        },
        bilanz() {
            return this.items.reduce((acc, e) => acc + e.betrag, 0);
        },
        zustand() {
            return this.bilanz > 0 ? "positiv" : "negativ";
        }
    },
    components: { Eintrag }
}
</script>

<style>
</style>