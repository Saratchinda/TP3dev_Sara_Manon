<template>
  <header class="header">
    <div class="left">
      <i class="fas fa-home"></i>
      <span>Home</span>
    </div>
    <div class="right">
      <i class="fas fa-user"></i>
      <span>Not yet logged in</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader'
}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #42b983;
  color: white;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.left, .right {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

i {
  font-size: 1.2em;
}
</style>
