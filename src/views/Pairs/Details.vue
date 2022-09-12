<template>

 
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
  

  
</template>
<script>

import BirdCard from '@/components/BirdCard.vue'
import Clutches from '@/components/PairClutches.vue'


    export default{
      components:{
        Clutches,
        BirdCard
},
        props: ['clutches', 'pair', 'birds'],


 
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