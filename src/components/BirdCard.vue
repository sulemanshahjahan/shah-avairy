<template>
  <router-link :to="{name: 'BirdDetails', params: {id: bird.id}}" class="bird-card">
    <h2>{{bird.name}}</h2>
    <p>Gender: {{bird.gender}}</p>
    <p>Date Of Birth: {{bird.dateOfBirth}}</p>
  </router-link>
</template>

<script>
export default {
  name: "BirdCard",
  props:{
    bird: {
      type:Object,
      require: true
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bird-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #000;
  margin-bottom: 18px; 
}
 
.bird-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.bird-card img {
  width: 100%;
}
.event-link {
  color: #fff;
  text-decoration: none;
}
@media (max-width: 480px) {
  .bird-card {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
