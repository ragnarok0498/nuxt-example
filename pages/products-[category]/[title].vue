<script lang="ts" setup>
const route = useRoute();
definePageMeta({
  validate: (route) => {
    const title = route.params.title as string;
    const regex = /^(?!\d+$)[a-zA-Z0-9-]+$/;
    return regex.test(title);
  }
});
</script>
<template>
  <div class="card">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title text-center">{{ route.params.title }}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Category: {{ route.params.category }}</li>
      <li class="list-group-item">Computer:{{ route.params.title }}</li>
    </ul>
  </div>
</template>
