<script lang="ts" setup>
defineProps({
  title: String,
  thumbnail: String,
  description: String,
  price: Number
});
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="thumbnail" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <p class="card-price">Price: ${{ price }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
