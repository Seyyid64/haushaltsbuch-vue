<template>
    <section id="monatslisten">
        <Monatsliste v-for='(monat, index) in monate' :key="index" :monat="monat" />
    </section>

</template>

<script>
import Monatsliste from './Monatsliste.vue'
import Store from '@/store';

export default {
    data() {
        return {
            eintraege: Store.state.eintraege,
        }
    },
    computed: {
        monate() {
            return Array.from(
                new Set(
                    this.eintraege.map((e) =>
                        new Date(e.datum).toLocaleString("de-DE", {
                            month: "long",
                            year: "numeric",
                        })
                    )
                )
            )
        },
    },
    components: {
        Monatsliste
    },

}

</script>

<style scope>
#monatslisten {
    -ms-grid-row: 5;
    -ms-grid-column: 3;
    grid-area: monatslisten-bereich;
}

.monatsliste {
    margin: 1rem 3rem 0;
    border-bottom: .1rem solid #ced4da;
}

.monatsliste>h2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.monatsliste>h2>.monat-jahr {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.monatsliste>h2>.monatsbilanz {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    font-size: 1.8rem;
    padding: .5rem 1rem;
    color: #fff;
    border-radius: 1.2rem;
}

.monatsliste>h2>.monatsbilanz.positiv {
    background-color: #28a745;
}

.monatsliste>h2>.monatsbilanz.negativ {
    background-color: #dc3545;
}

.monatsliste>ul {
    list-style: none;
    padding: 0;
    margin-bottom: 4rem;
}

.monatsliste>ul>li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 2.5rem;
    margin: 2rem 0;
}

.monatsliste>ul>li>.datum {
    padding: .5rem 1.8rem .5rem 2rem;
    border-top: .1rem solid #ced4da;
    border-right: none;
    border-bottom: .1rem solid #ced4da;
    border-left: .1rem solid #ced4da;
    border-bottom-left-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    background-color: #e9ecef;
    color: #495057;
    width: 12rem;
}

.monatsliste>ul>li>.titel {
    padding: .5rem 2rem;
    border-top: .1rem solid #ced4da;
    border-right: none;
    border-bottom: .1rem solid #ced4da;
    border-left: none;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.monatsliste>ul>li>.betrag {
    padding: .5rem 2rem;
    border-top: .1rem solid #ced4da;
    border-right: none;
    border-bottom: .1rem solid #ced4da;
    border-left: none;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
}

.monatsliste>ul>li>.entfernen-button {
    color: #495057;
    width: 4.5rem;
    background-color: #e9ecef;
    padding: .5rem 1rem;
    border-top: .1rem solid #ced4da;
    border-right: .1rem solid #ced4da;
    border-bottom: .1rem solid #ced4da;
    border-left: none;
    border-bottom-right-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
}

.monatsliste>ul>li>.entfernen-button>* {
    pointer-events: none;
}

.monatsliste>ul>li>.entfernen-button:focus {
    border-color: #80bdff;
    outline: 0;
    -webkit-box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
    z-index: 1;
}

.monatsliste>ul>li.ausgabe>.titel,
.monatsliste>ul>li.ausgabe>.betrag {
    background-color: #f8d7da;
    color: #dc3545;
    border-color: #f5c6cb;
}

.monatsliste>ul>li.einnahme>.titel,
.monatsliste>ul>li.einnahme>.betrag {
    background-color: #d4edda;
    color: #28a745;
    border-color: #c3e6cb;
}

</style>