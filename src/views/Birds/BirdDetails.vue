<template>
<div v-if="bird">
    <h1>Hello: {{bird.name}}</h1>
    <p><strong>Gender: </strong> {{bird.gender}}</p>
    <p><strong>Species: </strong> {{bird.species}}</p>
    <p><strong>Date Of Birth: </strong> {{bird.dateOfBirth}}</p>
    <p><strong>Status: </strong> {{bird.status}}</p>
    <p><strong>Cage Number: </strong> {{bird.cageNumber}}</p>
    <p><strong>Parents: </strong> {{bird.parents}}</p>
    </div>
</template>
<script>
import ApiCall from '@/services/EventCalls'
    export default{
        props: ['id'],
        data(){
            return {
                bird: null
            }
        },
        created() {
    ApiCall.getBird(this.id)
    .then(response => {
      this.bird = response.data
    })
    .catch(error => {
      console.log(error);
    })
  }
    }
</script>