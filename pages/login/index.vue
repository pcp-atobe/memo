<template lang="pug">
  section
    .l-container
      .login
        .login-button(@click="login") Googleでログイン
</template>

<script>
import {firebase, provider} from '@/plugins/firebase'

export default {
  created: function(){},

  methods: {
    login: function(){
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
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
