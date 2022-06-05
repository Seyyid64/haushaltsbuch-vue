<template>
    <li :class="item.typ">
        <span class="datum">{{ datum }}</span>
        <span class="titel">{{ item.titel }}</span>
        <span class="betrag"> {{ item.betrag.toFixed(2).replace(/\./, ",")  }}€</span>
        <button @click="loeschen(item)" class="entfernen-button" style="cursor: pointer;">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em"
                width="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z">
                </path>
            </svg>
        </button>
    </li>
</template>

<script>
import Store from '../store'

export default {
    props: {
        item: Object
    },
    computed: {
        datum() {
        return new Date(this.item.datum).toLocaleDateString("de-DE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        }
    },
    methods: {
        loeschen(item) {
            Store.mutations.removeTodo(item)
        }
    }
}
</script>

<style>
</style>