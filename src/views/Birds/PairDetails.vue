<template>
<div v-if="pair">
    <h1>{{pair.name}}</h1>
    <p><strong>Status: </strong> {{pair.status}}</p>
    <p><strong>Cage Number: </strong> {{pair.cageNumber}}</p>
    
  <div class="">
    <h2>Clutches: </h2>
    <Clutches v-for="(clutch, index) in clutches" :key="index" :clutchids="index" :clutch="clutch" />
  </div>
  
  </div>

</template>
<script>
import ApiCall from '@/services/EventCalls'
import Clutches from '@/components/PairClutches.vue'

    export default{
      components:{
        Clutches
},
        props: ['cageNumber'],
        data(){
            return {
                pair: null,
                clutches: [],
                clutchId: null
            }
        },
        created() {
    ApiCall.getPair(this.cageNumber)
    .then(response => {
      this.pair = response.data[0]
      this.clutchId = response.data[0].clutchId
    })
    .catch(error => {
      console.log(error);
    })

    ApiCall.getClutch()
    .then(response => {
      this.clutches = response.data
    })
    .catch(error => {
      console.log(error);
    })
    
  }
    }
</script>