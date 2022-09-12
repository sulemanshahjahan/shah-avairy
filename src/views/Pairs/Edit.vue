<template>

       
    
        <p>Edit the Pair here</p>
      
    
      
 
    </template>
  <script>

 
    
        export default{
         
            props: ['clutches', 'pair', 'birds'],
    
    
     
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