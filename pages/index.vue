<template lang="pug">
  section
    .l-container
      h1.head 一覧
      ul.list
        li.list-item(v-for="(item,key) in listItem" v-bind:key='item.date')
          nuxt-link(:to="{ name: 'item-id' , params : { id : key } }").list-item-link
            time.list-item-date {{dateFormat(item.date)}}
            p.list-item-contents {{item.content}}
            i.fas.fa-angle-right

      .text-center
        nuxt-link(to="/add" class="btn -blue") 追加する
</template>

<script>
import {firebase,FIREBASE_AUTH} from '@/plugins/firebase'
import axios from 'axios'
import moment from 'moment'
const URL = 'https://' + process.env.PROJECTID + '.firebaseio.com/'

export default {

  data: function(){
    return {
      listItem: null,
    }
  },

  mounted: function() {
    const _this = this
    setTimeout(() => {
      axios.get(URL + _this.$store.state.CURRENT_USER_ID + '/memo/.json').then( (res) => {
        _this.listItem = res.data;
      });
    })
  },

  methods: {
    dateFormat: function dateFormat(date) {
      return moment(date).format("YYYY/MM/DD")
    },
  }

}
</script>

<style lang="scss">
.list{
  margin-bottom: 3rem;
  .list-item{
    &:after{
      content: '';
    }
    .list-item-link{
      display: flex;
      flex-wrap: wrap;
      position: relative;
      padding: 1rem 0;
      padding-right: 2rem;
      color: #333333;
      border-bottom: 1px solid #333;
    }
    .list-item-date{
      width: 100%;
      margin-bottom: 4px;
      font-size: 1.2rem;
    }
    .list-item-contents{
      width: 100%;
      font-size: 1.6rem;
      letter-spacing: 0.025em;
    }
    .fas{
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -7px;
    }
  }
}
</style>
