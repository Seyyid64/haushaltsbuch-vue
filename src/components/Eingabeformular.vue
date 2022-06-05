<template>
    <section id="eingabeformular-container">
        <div v-show="error" class="fehlerbox">
            <span>Folgende Felder wurden nicht korrekt ausgefüllt:</span>
            <ul>
                <li>Titel</li>
                <li>Betrag</li>
            </ul>
        </div>
        <form @submit.prevent="eintragHinzufuegen" id="eingabeformular" action="#" method="get"></form>
        <div class="eingabeformular-zeile">
            <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
        </div>
        <div class="eingabeformular-zeile">
            <div class="titel-typ-eingabe-gruppe">
                <label for="titel">Titel</label>

                <input v-model="titel" type="text" id="titel" form="eingabeformular" name="titel"
                    placeholder="z.B. Einkaufen" size="10" title="Titel des Eintrags">

                <input v-model="typ" type="radio" id="einnahme" name="typ" form="eingabeformular"
                    title="Typ des Eintrags" value="einnahme">

                <label for="einnahme" title="Typ des Eintrags" style="cursor: pointer;">
                    Einnahme
                </label>

                <input v-model="typ" type="radio" id="ausgabe" name="typ" form="eingabeformular"
                    title="Typ des Eintrags" value="ausgabe" checked="">

                <label for="ausgabe" title="Typ des Eintrags" style="cursor: pointer;">
                    Ausgabe
                </label>
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <div class="betrag-datum-eingabe-gruppe">
                <label for="betrag">Betrag</label>
                <input v-model="betrag" type="number" id="betrag" name="betrag" form="eingabeformular" placeholder="z.B. 10,42" size="10"
                    step="0.01" min="0.01" title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)"
                    >

                <label for="datum">Datum</label>
                <input v-model="datum" type="date" id="datum" name="datum" form="eingabeformular" size="10" title="Datum des Eintrags"
                    >
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <button class="standard" type="submit" form="eingabeformular">Hinzufügen
            </button>
        </div>
    </section>
</template>

<script>
import Store from '../store.js'

export default {
    data() {
        return {
            titel: "",
            typ: "ausgabe",
            betrag: "",
            datum: new Date().toISOString().substring(0, 10), 
            error: false,
             
        }
    },
    methods: {
        eintragHinzufuegen() {
            if (this.titel === "" || this.betrag === "") 
                return this.error = true;
            Store.mutations.eintragHinzufuegen(this.titel, this.typ, this.betrag, this.datum);
            this.titel= "";
            this.betrag="";
            this.error = false;
        }
    }
}
</script>

<style scope>

#eingabeformular-container {
    -ms-grid-row: 3;
    -ms-grid-column: 3;
    grid-area: eingabeformular-bereich;
    padding: 3rem 3rem;
    background-color: #e9ecef;
    border-radius: 1.5rem;
}

#eingabeformular-container>.eingabeformular-zeile {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

#eingabeformular-container>.eingabeformular-zeile>* {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

#eingabeformular-container>.eingabeformular-zeile:last-of-type {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

[class$="-eingabe-gruppe"] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 1rem 0;
}

[class$="-eingabe-gruppe"]>label,
[class$="-eingabe-gruppe"]>input {
    line-height: 2.5rem;
    border: .1rem solid #ced4da;
}

[class$="-eingabe-gruppe"]>label {
    width: 8.2rem;
    padding: .5rem 1.8rem .5rem 2rem;
    background-color: #e9ecef;
    color: #495057;
    text-align: center;
    cursor: text;
}

[class$="-eingabe-gruppe"]>:first-child {
    border-right: none;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}

[class$="-eingabe-gruppe"]>:last-child {
    border-left: none;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
}

[class$="-eingabe-gruppe"]>input {
    padding: .375rem .75rem;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    color: #495057;
    -webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    -o-transition: color .15s ease-in-out, background-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
}

.titel-typ-eingabe-gruppe>input {
    border-right: none;
    border-left: none;
}

.titel-typ-eingabe-gruppe>label:nth-of-type(2) {
    width: 12rem;
    background-color: #d4edda;
    color: #28a745;
    border-color: #c3e6cb;
    border-right: none;
    border-left: none;
}

.titel-typ-eingabe-gruppe>label:nth-of-type(3) {
    width: 12rem;
    background-color: #f8d7da;
    color: #dc3545;
    border-color: #f5c6cb;
    border-left: none;
}

.titel-typ-eingabe-gruppe>input[type=radio] {
    display: none;
}

.titel-typ-eingabe-gruppe>input[type=radio]:checked+label {
    color: #fff;
    z-index: 1;
}

.titel-typ-eingabe-gruppe>input[type=radio]:nth-of-type(2):checked+label {
    background-color: #28a745;
    -webkit-box-shadow: 0 0 0 .2rem rgba(72, 180, 97, .5);
    box-shadow: 0 0 0 .2rem rgba(72, 180, 97, .5);
}

.titel-typ-eingabe-gruppe>input[type=radio]:nth-of-type(3):checked+label {
    background-color: #dc3545;
    -webkit-box-shadow: 0 0 0 .2rem rgba(225, 83, 97, .5);
    box-shadow: 0 0 0 .2rem rgba(225, 83, 97, .5);
}

.betrag-datum-eingabe-gruppe>input:nth-of-type(1) {
    border-right: none;
    border-left: none;
}

.betrag-datum-eingabe-gruppe>label:nth-of-type(2) {
    border-right: none;
    border-left: none;
}

button.standard {
    max-width: 24rem;
    line-height: 2.5rem;
    font-size: 1.4rem;
    background-color: #007bff;
    border: .1rem solid #007bff;
    padding: .5rem 2rem;
    color: #fff;
    border-radius: 1.5rem;
    margin: 1rem 0;
    cursor: pointer;
    -webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    -o-transition: color .15s ease-in-out, background-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
}

button.standard:focus {
    border-color: #0062cc;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, .5);
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, .5);
    z-index: 1;
}

.fehlerbox {
    background-color: #f8d7da;
    color: #dc3545;
    border: .1rem solid #f5c6cb;
    border-radius: 1.5rem;
    padding: 1.5rem 2rem;
    margin-bottom: 1rem;
}

.fehlerbox>ul {
    margin: .75rem 0 0;
}

</style>