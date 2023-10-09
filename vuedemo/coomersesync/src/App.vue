<script>
 import Home from './components/Home.vue';
 import RefreshComponent from './components/RefreshComponent.vue';

</script>

<template>

<div id="app">
  <div id="nav">
    <div id="home-link">
      <router-link to="/Home">Csapatunk</router-link> 
    </div>
    <div id="refresh-link">
      <router-link to="/RefreshComponent">Frissítések</router-link>
    </div>
  </div>
  <router-view />
</div>

</template>


<style scoped>
#app
{
  display: grid;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  padding: 10px;
}
#nav
{
  grid-column: 1 / 6;
  margin: 10px;
  padding: 5px;
}
#home-link
{
  margin: 5px 10px 10px 5px;
}
#refresh-link
{
  margin: 5px 10px 10px 5px;
}


</style>
