<template>
  <div id="app" class="">
    
    <nav class="navbar is-light is-medium" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://studium.umontreal.ca/">
          <span class="icon">
            <i class="fas fa-history"></i>
          </span>
          <span>HST2125</span>
        </a>
        <div class="navbar-menu">
          <a class="navbar-item" href="#">
              Introduction
          </a>
          <a class="navbar-item" href="index.html">
                Parcours pédagogique
            </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="#">
                    Aperçu spacio-temporel
                </a>
                <a class="navbar-item" href="scandinavie-detail.html">
                    Scandinavie
                </a>
              <a class="navbar-item" href="#">
                Îles britanniques
              </a>
              <a class="navbar-item" href="#">
                Italie
              </a>
              <a class="navbar-item" href="#">
                Espagne
              </a>
              <a class="navbar-item" href="#">
                Gaule et Francie
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="#">
                Europe de l’Est
              </a>
            </div>
          </div>

          <a class="navbar-item" href="#">
              Thématiques
          </a>
          <a class="navbar-item" href="#">
              Typologie des sources
          </a>
        </div>
      </div>
    </nav>
    <div class="section container is-fluid"> 
      <div class=" tabs is-toggle is-fullwidth">
        <ul>
            <li id="tab-intro" class="tab" v-bind:class="[activeClass, errorClass]"><router-link v-bind:to="'/'">Aperçu</router-link></li>
            <li id="tab-act01" class="tab"><router-link v-bind:to="'/about'">Activité 1</router-link></li>
            <li id="tab-act02" class="tab"><a>Activité 2</a></li>
            <li id="tab-act03" class="tab"><a>Activité 3</a></li>
            <li id="tab-act04" class="tab"><a>Activité 4</a></li>
            <li id="tab-act05" class="tab"><a>Activité 5</a></li>
        </ul>
        <p>{{ age }}</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: {
    activeClass: 'is-active',
    errorClass: ''
  }
}
</script>

<!-- styling for the component -->
<style>

</style>