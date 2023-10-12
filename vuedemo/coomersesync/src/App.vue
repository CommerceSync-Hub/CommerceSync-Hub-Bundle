<script>
 import Home from './components/Home.vue';
 import RefreshComponent from './components/RefreshComponent.vue';
 import SablonComponent from './components/SablonComponent.vue';

</script>

<template>

  <div class="col">
      <img id="logo" src="./assets/R.png" class="rounded float-end" alt="logo">
    </div>
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

</template>


<style scoped>
#nav
{
  display: flex;
  justify-content: start;
  gap: 10px;
  background: hsla(240, 1%, 35%, 0.7);
  padding: 5px;
  margin: 8px;
  border-radius: 15px;
}
#logo
{
    max-width: 7%;
    margin: 3px;
    padding: 3px;
}
#home-link,
#refresh-link,
#template-link
{
  margin: 2px ;
  padding: 2px;
}


</style>
