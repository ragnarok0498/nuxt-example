<script lang="ts" setup>
const route = useRoute();
</script>
<template>
  <div>
    <h1>{{ route.params.title }}</h1>
  </div>
</template>
