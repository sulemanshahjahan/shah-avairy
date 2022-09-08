<template>
  <!-- All Individual Birds Hidden -->
 <h2>All of our birds</h2>
<div class="events">
<BirdCard v-for="bird in birds" :key="bird.id" :bird="bird" class="birdCards"/>
</div> 
<h2>All of our Pairs</h2>
<div class="events">
<PairCard v-for="pair in pairs" :key="pair.cageNumber" :pair="pair" />
</div>


</template>

<script>
import BirdCard from "@/components/BirdCard.vue";
import ApiCall from "@/services/EventCalls";
import PairCard from "@/components/PairCard.vue";

export default{
  name: 'BirdList',
  components:{
    BirdCard,
    PairCard
},
  data(){
    return{
      birds: [],
      pairs: []
    }
  },
  created() {
    ApiCall.getBirds()
    .then(response => {
      this.birds = response.data
    })
    .catch(error => {
      console.log(error);
    })

    ApiCall.getPairs()
    .then(response => {
      this.pairs = response.data
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>

<style scoped>
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