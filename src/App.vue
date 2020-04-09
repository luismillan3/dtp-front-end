<template>
  <v-app>
    <v-app-bar app>
      <v-btn text @click="navigate('')">
          Home
      </v-btn>

      <v-btn text @click="navigate('mandatory')">
          Mandatory
      </v-btn>
      
      <v-btn text @click="navigate('functional')">
          Functional
      </v-btn>
    </v-app-bar>

    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import UploadPage from './views/UploadPage';

export default {
  name: 'App',
  methods:{
    navigate(route){
      this.$router.push('/'+route);
    }
  }

};
</script>
