<template>
    <div v-if="bird">
    <h1>Hello: {{bird.name}}</h1>
        <div id="nav">
          <router-link :to="{ name: 'BirdDetails', params: { id } }"
            >Details</router-link
          >
          |
          <router-link :to="{ name: 'BirdEdit', params: { id } }"
            >Edit</router-link
          >
        </div>

        <router-view :bird="bird" />
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
          if(error.response && error.response.status == 404){
            this.$router.push({
            name: '404Resource',
            params: {resource: 'bird'} 
          });
          }else{
            this.$router.push({name: 'NetworkError'});
          }
        })
      }
        }
    </script>