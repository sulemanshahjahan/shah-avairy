<template>


  <div  class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{pair.name}}</h5>
    <h6 class="card-subtitle mb-2 text-muted"><strong>Pair No: </strong> {{pair.cageNumber}}</h6>
    <router-link :to="{name: 'PairDetails', params: { cageNumber: pair.cageNumber}}" > View Bird</router-link>
  </div>
</div>

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
