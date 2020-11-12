<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style>
  .nav-bar{
    display: flex;
    height: 2.75rem;
    line-height: 2.75rem;
    text-align: center;
    box-shadow: 0 1px 1px rgb(100,100,100,0.1);
  }
  
  

  .left,.right{
    width: 3.75rem;
  }

  .center{
    flex: 1;
  }
</style>
