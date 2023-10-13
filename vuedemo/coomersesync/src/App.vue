<script>
 import Home from './components/Home.vue';
 import RefreshComponent from './components/RefreshComponent.vue';
 import SablonComponent from './components/SablonComponent.vue';

</script>

<template>

  <header>
    <div id="app">
  <div id="nav">
    <div id="home-link">
     <router-link to="/Home">Csapat</router-link>
    </div>
    <div id="refresh-link">
      <router-link to="/RefreshComponent">Frissítés</router-link>
    </div>
    <div id="template-link">
      <router-link to="/SablonComponent">Sablonok</router-link>
    </div>
  </div>
  <router-view />
</div>
  </header>

</template>


<style scoped>
#nav
{
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  background: hsla(240, 1%, 35%, 0.7);
  padding: 0 5px;
  margin: 8px;
  border-radius: 15px;
}

#home-link,
#refresh-link,
#template-link
{
  margin: 2px ;
  padding: 2px;
  width: 100px;
}

</style>
