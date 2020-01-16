<template>
  <div id="app">
    <compo-header></compo-header>
    <compo-menu></compo-menu>
    <compo-content></compo-content>
    <compo-footer></compo-footer>
  </div>
</template>

<script>

import CompoHeader from "./layouts/components/CompoHeader";
import CompoMenu from "./layouts/components/CompoMenu";
import CompoContent from "./layouts/components/CompoContent";
import CompoFooter from "./layouts/components/CompoFooter";
export default {
  components: {
    CompoHeader,
    CompoMenu,
    CompoContent,
    CompoFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
