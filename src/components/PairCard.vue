<template>
  <router-link :to="{name: 'pairDetails', params: {'id': pair.id}}" class="bird-card">
    <h2>{{pair.name}}</h2>
  </router-link>
</template>

<script>
export default {
  name: "PairCard",
  props:{
    pair: {
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
