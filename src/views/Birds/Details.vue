<template>
    <p><strong>Gender: </strong> {{bird.gender}}</p>
    <p><strong>Species: </strong> {{bird.species}}</p>
    <p><strong>Date Of Birth: </strong> {{bird.dateOfBirth}}</p>
    <p><strong>Status: </strong> {{bird.status}}</p>
    <p><strong>Cage Number: </strong> {{bird.cageNumber}}</p>
    <p><strong>Parents: </strong> {{bird.parents}}</p>

</template>
<script>

    export default{
        props: ['bird'],
       
    }
</script>