<script lang="ts" setup>
defineProps(["product"]);
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="product.thumbnail" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-price">Price: ${{ product.price }}</p>
      <NuxtLink
        :to="{
          name: 'products-category-title',
          params: { title: product.title, category: product.category },
          query: {
            image: product.thumbnail,
            description: product.description,
            price: product.price,
          },
        }"
        class="btn btn-primary"
        >More information</NuxtLink
      >
    </div>
  </div>
</template>
