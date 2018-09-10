<template lang="pug">
  main(id="form")
    .l-container
      .text-center
        textarea(placeholder="メモする内容を入力してください" class="form-textarea" v-model="text")

      .text-center
        button(@click="submit" v-bind:disabled='submitFlag' class="btn -blue") 保存
</template>

<script>
import {firebase, FIREBASE_DB} from '@/plugins/firebase'
import axios from 'axios'
const URL = 'https://' + process.env.PROJECTID + '.firebaseio.com/'

export default {
  data: function(){
    return {
      text: null,
      submitFlag: true
    }
  },

  methods: {
    submit: function(){
      const _this = this
      const date = Date.now()
      const data = {
        "date": date,
        "content": _this.text
      }
      FIREBASE_DB.ref('user').push(data, (err) => {
        if(!err){
          _this.$router.push('/')
        }
      })
    }
  },

  watch: {
    text: function(val){
      if(val){
        this.submitFlag = false
      }else{
        this.submitFlag = true
      }
    }
  }
}
</script>

<style lang="scss">
#form{
  .form-textarea{
    width: 68rem;
    margin: 5rem auto;
    padding: 1rem;
    border: none;
    resize: none;
    font-family: "Yu Gothic Medium", "游ゴシック Medium", YuGothic, sans-serif;
    font-feature-settings: "palt";
    font-size: 1.6rem;
    line-height: 2;
    letter-spacing: 0.025em;
    color: #333333;
    outline: none;
  }
}
</style>
