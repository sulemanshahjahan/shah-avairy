<template>
<div v-if="pair">


    <h1>{{pair.name}}</h1>
    <p><strong>Status: </strong> {{pair.status}}</p>
    <p><strong>Cage Number: </strong> {{pair.cageNumber}}</p>
    

    <div class="birds">
      <h2>Male & Female</h2>
      <div class="container text-center">
      <div class="row">

      <BirdCard v-for="bird in birds" :key="bird.id" :bird="bird" class="birdCards"/>
      </div>
    </div>
    </div>

    <h2>Clutches: </h2>
    
    
<div class="container text-center">
  <div class="row">
   
      <Clutches v-for="(clutch, index) in clutches" :key="index" :clutchids="index" :clutch="clutch" />
   
  </div>
</div>
  

  
  </div>

</template>
<script>
import ApiCall from '@/services/EventCalls'
import BirdCard from '@/components/BirdCard.vue'
import Clutches from '@/components/PairClutches.vue'
import { watchEffect } from 'vue'

    export default{
      components:{
        Clutches,
        BirdCard
},
        props: ['cageNumber'],
        data(){
            return {
                pair: null,
                clutches: [],
                clutchId: null,
                birdsID: null,
                birds: []
            }
        },
        created() {
    ApiCall.getPair(this.cageNumber)
    .then(response => {
      this.pair = response.data[0]
      this.clutchId = response.data[0].clutchId
      this.birdsID = response.data[0].birdsID
     
    })
    .catch(error => {
      console.log(error);
    })
  },
  mounted   (){
    watchEffect(() => {
      

     return ApiCall.getClutch(this.clutchId)
    .then(response => {
      this.clutches = response.data

      ApiCall.getBirds(this.birdsID)
    .then(response => {
      this.birds = response.data
     
    })
    .catch(error => {
      console.log(error);
    })

    })
    .catch(error => {
      console.log(error);
    })


  })


  }
 
    }
</script>

<style>
  .birds { 
  display: block;
  align-items: center;
  justify-content: center;
  column-gap: 3%;
}

@media (max-width: 480px) {
  .birds {
    display: block;
    column-gap: 0%;
  }
}
</style>