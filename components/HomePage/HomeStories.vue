<template>
  <div class="wrap">
    <div class="container">
      <h4 class="section__title">
        {{ $store.state.translations["main.stories"] }}
      </h4>
      <div class="items">
        <div class="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MoUtHQBbC9o?si=CiARGHZhkOArLdQC&rel=0&controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Wn7O_Ih2zJo?si=CiARGHZhkOArLdQC&rel=0&controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kDJtWc81Mlg?si=CiARGHZhkOArLdQC&rel=0&controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
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
.item {
  overflow: hidden;
  border-radius: 16px;
}
.item iframe {
  width: 100%;
  height: 660px;
  object-fit: cover;
  transform: scale(1.3);
}
.wrap {
  padding-bottom: 80px;
}
@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
  .item iframe {
    height: 220px;
  }
}
</style>
