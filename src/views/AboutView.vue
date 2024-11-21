<template>
  <div>
    <div v-for="obj in arr">
      <div class="about" :style="{color: obj.color}" >
          <h1>{{obj.color}}</h1>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      arr:[
        {
          color:'white',
        },
        {
          color:'blue',
        },
        {
          color:'green',
        },
        {
          color:'pink',
        }
      ]
    }
  },
}
</script>
<style>

.about{
  margin: 10px;
  width: 100px !important;
  height: 100px !important;
  background: pink;
}
</style>
