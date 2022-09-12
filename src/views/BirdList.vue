<template>
  <!-- All Individual Birds Hidden -->
 <h2 class="hidden">All of our birds</h2>
<div class="events">

</div> 
  <!-- All Individual Birds Hidden -->

<h2>All of our Pairs</h2>
<div class="events">
<PairCard v-for="pair in pairs" :key="pair.cageNumber" :pair="pair" />
</div>


<div id="pagination">
  <router-link
      :to="{ name: 'BirdsList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      >Prev Page</router-link
    >

    <router-link
      :to="{ name: 'BirdsList', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
      >Next Page</router-link
    >
</div>


</template>

<script>

import ApiCall from "@/services/EventCalls";
import PairCard from "@/components/PairCard.vue";


export default{
  name: 'BirdList',
  props: ['page'],
  components:{
    
    PairCard
},
  data(){
    return{
      birds: [],
      pairs: [],
      totalPairs: 0
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {


     ApiCall.getPairs(2, parseInt(routeTo.query.page) || 1)
    .then(response => {
      next(comp => {
        comp.pairs = response.data
        comp.totalPairs = response.headers['x-total-count'];
      })
    })
    .catch(error => {
        if (error.response && error.response.status == 404) {
          next({ name: '404Resource', params: { resource: 'pair' } })
        } else {
         next({ name: 'NetworkError' })
        }
      })
  },
  beforeRouteUpdate(routeTo) {


return ApiCall.getPairs(2, parseInt(routeTo.query.page) || 1)
.then(response => {
 
    this.pairs = response.data
    this.totalPairs = response.headers['x-total-count'];
 
})
.catch(error => {
    if (error.response && error.response.status == 404) {
      return ({ name: '404Resource', params: { resource: 'pair' } })
    } else {
      return ({ name: 'NetworkError' })
    }
  })
},
  computed:{
    hasNextPage(){
        var totalPage = Math.ceil(this.totalPairs / 2);
        return this.page < totalPage;
    }
  }
}
</script>

<style scoped>
  .hidden{
    display:none;
  }
.events { 
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3%;
}
.birdCards{
  display:none;
}
@media (max-width: 480px) {
  .events {
    display: block;
    column-gap: 0%;
  }
}
</style>