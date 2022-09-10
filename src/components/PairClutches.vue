<template>
  <div class="col-4">   <div class="card"  style="width: 100%;">        <div class="card-header">
          <h5>Number: {{clutchids + 1}} Eggs: {{clutch.eggs.length}}</h5>
  </div>
  <ul class="list-group list-group-flush"  v-for="clutch in clutch.eggs" :key="clutch">
    <li class="list-group-item">{{clutch.status }}</li>
    <li class="list-group-item">{{clutch.dateOfBinding }}</li>
    
  </ul>
</div>
</div>






</template>
<script>
    export default {
      name: "PairClutches",
      props:{
        index: Number,
        clutchids: Number,
        numOfClutches: Number,
        clutch: {
          type:Object,
          require: true
        }
      },
    
    }
    </script>

    <style scoped>
        .clutch {
            width:300px;
            margin:auto;
            border:1px solid #919191;
            border-bottom:0;
            padding:0;
            margin-bottom:10px;
        }
        .clutch li{
            list-style: none;
            border-bottom:1px solid #919191;
            padding:10px 0;
        }
    </style>