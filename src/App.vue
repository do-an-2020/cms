<template>
  <div id="app">
   
    <compo-header></compo-header>
    <compo-menu></compo-menu>
    <compo-content></compo-content>
    <compo-footer></compo-footer>
  </div>
</template>

<script language="javascript" type="text/javascript" src='./assets/plugins/jquery-2.0.3.min.js'></script>
<script language="javascript" type="text/javascript" src='./assets/plugins/bootstrap/js/bootstrap.min.js'></script>
<script language="javascript" type="text/javascript" src='./assets/plugins/modernizr-2.6.2-respond-1.1.0.min.js'></script>
<script language="javascript" type="text/javascript" src='./assets/js/for_index.js'></script>

<script language="javascript" type="text/javascript" src='./assets/plugins/jquery-2.0.3.min.js'></script>
<script language="javascript" type="text/javascript" src='./assets/plugins/bootstrap/js/bootstrap.min.js'></script>
<script language="javascript" type="text/javascript" src='./assets/plugins/modernizr-2.6.2-respond-1.1.0.min.js'></script>

<script language="javascript" type="text/javascript" src='./assets/plugins/flot/jquery.flot.js'></script>
<script language="javascript" type="text/javascript" src='./assets/plugins/flot/jquery.flot.resize.js'></script>
<script language="javascript" type="text/javascript" src='./assets/plugins/flot/jquery.flot.time.js'></script>
<script language="javascript" type="text/javascript" src='./assets/plugins/flot/jquery.flot.stack.js'></script>

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
