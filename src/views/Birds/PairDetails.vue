<template>
<div v-if="pair">
    <h1>Hello: {{pair.name}}</h1>
    <p><strong>Status: </strong> {{pair.status}}</p>
    <p><strong>Cage Number: </strong> {{pair.cageNumber}}</p>
    </div>
</template>
<script>
import ApiCall from '@/services/EventCalls'
    export default{
        props: ['id'],
        data(){
            return {
                pair: null
            }
        },
        created() {
    ApiCall.getPair()
    .then(response => {
      this.pair = response.data
    })
    .catch(error => {
      console.log(error);
    })
  }
    }
</script>