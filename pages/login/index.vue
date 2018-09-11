<template lang="pug">
  section
    .l-container
      .login
        .login-button(@click="login") Googleでログイン
        .login-logout.btn(@click="logout") ログアウト
</template>

<script>
import {firebase, provider} from '@/plugins/firebase'
import { mapActions } from 'vuex'

export default {
  created: function(){

  },

  methods: {
    ...mapActions([
      'doLogin',
    ]),

    login: function(){
      this.doLogin()
    },

    logout: function(){
      firebase.auth().signOut().then(function() {
        console.log("Signed out.");
      });
    }
  }
}

</script>

<style lang="scss">
  .login{
    .login-button{
      border:1px solid #ccc;
      padding: 10px;
      cursor: pointer;
    }
  }
</style>
