<template>
  <div class="wrapper">
    <Menu class="menu-spacing" />
    <main class="content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.menu-spacing {
  margin-bottom: 20px;
}

.content {
  flex: 1;
  border: 2px;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto; 
  max-width: 1200px; 
  width: 100%;
}
</style>
