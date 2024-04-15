<template>
  <div class="wrap">
    <div class="container">
      <h4 class="section__title">
        {{ $store.state.translations["main.stories"] }}
      </h4>
      <div class="items">
        <div class="item">
          <video controls src="/story-1.MOV"></video>
        </div>
        <div class="item">
          <video controls src="/story-2.MOV"></video>
        </div>
        <div class="item">
          <video controls src="/story-3.MOV"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;
}
.item video {
  width: 100%;
  height: 660px;
  object-fit: cover;
  border-radius: 16px;
}
.wrap {
  padding-bottom: 80px;
}
@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
  .item video {
    height: 220px;
  }
}
</style>
