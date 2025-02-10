<script lang="ts" setup>
const route = useRoute();
definePageMeta({
  validate: (route) => {
    const title = decodeURIComponent(route.params.title as string);
    const regex = /^(?!\d+$)[a-zA-Z0-9\s\-’'éèàùñ]+$/u;
    return regex.test(title);
  }
});
const productImage = route.query.image as string;

</script>
<template>
    <section class="bg-light">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <img :src="productImage" class="product-image" alt="Product Image" />
          <h2 class="mb-4 display-5 text-center">{{ route.params.title }}</h2>
          <p class="text-secondary mb-5 text-center">
            {{ route.query.description }}
          </p>
          <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>
    </div>
  </section>
  <div class="card">
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Category:</strong> {{ route.params.category }}</li>
      <li class="list-group-item"><strong>Product:</strong> {{ route.params.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
.product-image {
  max-width: 200px; 
  height: auto; 
  display: block;
  margin: 0 auto;
  border-radius: 10px;
}
</style>