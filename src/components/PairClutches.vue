<template>
    <h5>Number: {{clutchids + 1}} Eggs: {{clutch.eggs.length}}</h5>
    <ul v-for="clutch in clutch.eggs" :key="clutch" class="clutch">
        <li>{{clutch.status }}</li>
        <li>{{clutch.dateOfBinding }}</li>
        </ul>
</template>
<script>
    export default {
      name: "PairClutches",
      props:{
        index: Number,
        clutchids: Number,
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