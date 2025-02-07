<script lang="ts" setup>
defineProps({
  title: String,
  slug: String,
  thumbnail: String,
  price: Number,
  category: String
});
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="thumbnail" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-price">Price: ${{ price }}</p>
      <NuxtLink :to="{ name: 'products-category-title', params:{ title: slug,category }}" class="btn btn-primary">More information</NuxtLink>
    </div>
  </div>
</template>
