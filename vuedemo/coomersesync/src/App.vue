<script>
 import Home from './components/Home.vue';
 import RefreshComponent from './components/RefreshComponent.vue';
 import SablonComponent from './components/SablonComponent.vue';
 import User from './components/User.vue';
 import Admin from './components/Admin.vue';

 export default
{
    name: 'App',
    data ()
    {
        return{
            showNav: false,  
        } 
    }    
};


</script>

<template>

  <header>
  <svg @click="showNav = !showNav" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list my-1 mx-2 bg-danger rounded" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
    <div id="app">
  <div id="nav" v-show="showNav">
    <div id="link" @click="showNav = false">
     <router-link to="/Home">Csapat</router-link>
    </div>
    <div id="link" @click="showNav = false">
      <router-link to="/RefreshComponent">Frissítés</router-link>
    </div>
    <div id="link" @click="showNav = false" >
      <router-link to="/SablonComponent">Sablonok</router-link>
    </div>
    <div id="link" @click="showNav = false" >
      <router-link to="/User">Felhasználó</router-link>
    </div>
    <div id="link" @click="showNav = false" >
      <router-link to="/Admin">Admin</router-link>
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
  flex-direction: column;
  gap: 10px;
  background: hsla(240, 1%, 35%, 0.7);
  padding: 0 5px;
  margin: 8px;
  border-radius: 15px;
}

#link

{
  margin: 2px ;
  padding: 2px;
  width: 100px;
}

</style>
