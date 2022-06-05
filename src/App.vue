<script setup>
import Navigationsleiste from './components/Navigationsleiste.vue';
import Eingabeformular from './components/Eingabeformular.vue';
import Gesamtbilanz from './components/Gesamtbilanz.vue';
import Monatslistensammlung from './components/Monatslistensammlung.vue';
</script>

<template>
  <Navigationsleiste />
  <Eingabeformular />
  <Monatslistensammlung />
  <Gesamtbilanz />
</template>

<style>

/* === Fonts === */

@font-face {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 400;
    src: local("Amatic SC Regular"), local("AmaticSC-Regular"),
        url("./../fonts/amatic-sc/amatic-sc-v13-latin-regular.woff2") format("woff2"),
        url("./../fonts/amatic-sc/amatic-sc-v13-latin-regular.woff") format("woff");
}

@font-face {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 300;
    src: local(""),
        url("./../fonts/oswald/oswald-v31-latin-300.woff2") format("woff2"),
        url("./../fonts/oswald/oswald-v31-latin-300.woff") format("woff");
}

@font-face {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 400;
    src: local(""),
        url("./../fonts/oswald/oswald-v31-latin-regular.woff2") format("woff2"),
        url("./../fonts/oswald/oswald-v31-latin-regular.woff") format("woff");
}

@font-face {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    src: local(""),
        url("./../fonts/oswald/oswald-v31-latin-700.woff2") format("woff2"),
        url("./../fonts/oswald/oswald-v31-latin-700.woff") format("woff");
}

/* === Allgemeines CSS === */

html {
    font-size: 62.5%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}

body,
#root,
input,
textarea,
button,
select,
option {
    font-family: "Oswald", Helvetica, sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: .2rem;
}

body {
    margin: 0;
}

#root {
    margin: 0;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: [col-1-start] 2rem 1fr 2rem [col-1-end 2rem col-2-start] 2rem 2fr 2rem [col-2-end 2rem col-3-start] 2rem 1fr 2rem [col-3-end];
    grid-template-columns: [col-1-start] 1fr [col-1-end col-2-start] 2fr [col-2-end col-3-start] 1fr [col-3-end];
    -ms-grid-rows: [row-1-start] 2rem auto 2rem [row-1-end 2rem row-2-start] 2rem auto 2rem [row-2-end 2rem row-3-start] 2rem auto 2rem [row-3-end];
    grid-template-rows: [row-1-start] auto [row-1-end row-2-start] auto [row-2-end row-3-start] auto [row-3-end];
    grid-template-areas: "navigationsleisten-bereich navigationsleisten-bereich navigationsleisten-bereich"
        ". eingabeformular-bereich gesamtbilanz-bereich"
        ". monatslisten-bereich gesamtbilanz-bereich";
    gap: 2rem 2rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 400;
}

:focus {
    border-color: #80bdff;
    outline: 0;
    -webkit-box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
    z-index: 1;
}

::placeholder,
::-webkit-input-placeholder,
::-moz-placeholder,
:-ms-input-placeholder,
::-ms-input-placeholder {
    color: #495057;
}

</style>

