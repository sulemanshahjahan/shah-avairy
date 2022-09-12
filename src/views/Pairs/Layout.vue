<template>
    <div v-if="pair">
    
    
        <h1>{{pair.name}}</h1>
        <div id="nav">
          <router-link :to="{ name: 'PairDetails', params: { cageNumber } }"
            >Details</router-link
          >
          |
          <router-link :to="{ name: 'PairEdit', params: { cageNumber } }"
            >Edit</router-link
          >
        </div>
    
       
        <router-view :pair="pair" :clutches="clutches"  :birds="birds" />
    
      
      </div>
    
    </template>
    <script>
    import ApiCall from '@/services/EventCalls'

    import { watchEffect } from 'vue'
    
        export default{
         
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
          if(response.data[0]?.clutchId){
            this.clutchId = response.data[0].clutchId
          }
          if(response.data[0]?.birdsID){
            this.birdsID = response.data[0].birdsID
          }
         
          if(response.data == ""){
            this.$router.push({
            name: '404Resource',
            params: {resource: 'pair'} 
          });
          }
         
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
          alert('from birds');
        })
    
        })
        .catch(error => {
          alert('from clutch');
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