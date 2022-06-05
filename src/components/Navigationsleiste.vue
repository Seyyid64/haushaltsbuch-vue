<template>
  <nav id="navigationsleiste">
      <a href="#">
        <span id="markenname">Haushaltsbuch</span>
      </a>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

#navigationsleiste {
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 5;
    grid-area: navigationsleisten-bereich;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #343a40;
    line-height: 8rem;
}

#navigationsleiste>a {
    text-decoration: none;
}

#markenname {
    font-size: 5rem;
    text-transform: uppercase;
    color: #fff;
    font-family: "Amatic SC", cursive;
    line-height: inherit;
    vertical-align: bottom;
}

#markenname>[class*="fa-"] {
    font-size: 4rem;
    vertical-align: baseline;
    margin-right: 1rem;
}

</style>