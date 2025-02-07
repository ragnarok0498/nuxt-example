<script lang="ts" setup>
const { data: products } = await useFetch("/api/products");
</script>

<template>
  <section class="bg-light py-3 py-md-5">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 class="mb-4 display-5 text-center">Page Products</h2>
          <p class="text-secondary mb-5 text-center">
            Example proyect with Nuxt3 VueJS
          </p>
          <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>
    </div>
  </section>
  <div class="grid">
    <Card v-for="product in products.products" :key="product.id" :="product" />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 2rem;
}
</style>
