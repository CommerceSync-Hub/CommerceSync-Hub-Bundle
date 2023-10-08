<script>
 import Home from './components/Home.vue';
 import RefreshComponent from './components/RefreshComponent.vue';

</script>

<template>
  <div class="wrapper">
    <div class="home-page">
      <router-link to="/Home">Csapatunk</router-link>  
    </div>
    <div class="refresh-page">
      <router-link to="/RefreshComponent">Frissít</router-link>
    </div>
  </div>
</template>


<style >

.wrapper
{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.home-page
{
  grid-column: 1 / 3;
  grid-row: auto;
  margin: 10px;
  padding: 5px;
}
.refresh-page
{
  grid-column: 6 / 10;
  grid-row: auto;
  margin: 10px;
  padding: 5px;
}

</style>
