<template>
    <aside id="gesamtbilanz">
        <h1>Gesamtbilanz</h1>
        <div class="gesamtbilanz-zeile einnahmen"><span>Einnahmen:</span><span>{{ einnahmen.toFixed(2).replace(/\./, ",") }} €</span></div>
        <div class="gesamtbilanz-zeile ausgaben"><span>Ausgaben:</span><span>{{ ausgaben.toFixed(2).replace(/\./, ",") }} €</span></div>
        <div class="gesamtbilanz-zeile bilanz"><span>Bilanz:</span><span :class="bilanzFarbe">{{ gesamtBilanz.toFixed(2).replace(/\./, ",")}} €</span></div>
    </aside>
</template>

<script>
import Store from "../store";
export default {
    computed: {
        einnahmen() {
            return Store.state.eintraege.filter((e) => e.betrag > 0).reduce((acc, e) => acc + e.betrag, 0);
        },
        ausgaben() {
            return Store.state.eintraege.filter((e) => e.betrag < 0).reduce((acc, e) => acc + e.betrag, 0);
        },
        gesamtBilanz() {
            return this.einnahmen + this.ausgaben;
        },
        bilanzFarbe() {
            return this.gesamtBilanz > 0 ? "positiv" : "negativ";
        }
    }
}
</script>

<style>

#gesamtbilanz {
    -ms-grid-row: 3;
    -ms-grid-row-span: 3;
    -ms-grid-column: 5;
    grid-area: gesamtbilanz-bereich;
    padding: 3rem 3rem;
    background-color: #e9ecef;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    -ms-grid-row-align: start;
    align-self: start;
}

#gesamtbilanz>.gesamtbilanz-zeile {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 2.5rem;
}

#gesamtbilanz>.gesamtbilanz-zeile>span:nth-of-type(1) {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

#gesamtbilanz>.gesamtbilanz-zeile>span:nth-of-type(2) {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    padding: .2rem .75rem;
}

#gesamtbilanz>.bilanz {
    margin-top: 1rem;
}

#gesamtbilanz>.ausgaben>span:nth-of-type(2) {
    border-bottom: .1rem solid #ced4da;
}

#gesamtbilanz>.bilanz>span:nth-of-type(1) {
    font-weight: 400;
}

#gesamtbilanz>.bilanz>span:nth-of-type(2) {
    color: #fff;
    border-radius: 1.2rem;
}

#gesamtbilanz>.bilanz>span:nth-of-type(2).positiv {
    background-color: #28a745;
}

#gesamtbilanz>.bilanz>span:nth-of-type(2).negativ {
    background-color: #dc3545;
}

</style>