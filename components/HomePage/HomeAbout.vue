<template>
  <div class="wrap">
    <div class="container">
      <div class="grid">
        <div class="left">
          <div class="cardo">
            <UprightArrow class="arrow" />
            <h4 class="title">
              Butterfly Home Мы - то, что нужно каждому семью
            </h4>
            <div class="items">
              <div class="item">
                <p>15</p>
                <p>лет на рынке</p>
              </div>
              <div class="item">
                <p>40+</p>
                <p>Сотрудников</p>
              </div>
            </div>
          </div>
          <div class="cardo">
            <p class="text">
              Наша компания с 1997 года специализируется на производстве и
              реализации, постельного белья, матрасов, подушек, одеял и другого
              текстиля оптом. За это время нашими партнерами стали сотни
              предприятий и организаций по всей стране.
            </p>
          </div>
        </div>
        <div class="right">
          <img src="@/assets/img/about.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UprightArrow from "@/components/SvgIcons/UprightArrow.vue";

export default {
  components: {
    UprightArrow,
  },
};
</script>

<style scoped>
.wrap {
  padding: 88px 0;
}
.grid {
  display: grid;
  grid-template-columns: 5fr 5fr;
  gap: 16px;
}
.cardo {
  padding: 32px;
  border-radius: 24px;
  background: #f4f4f7;
  position: relative;
}
.left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.title {
  color: var(--Black, #020105);
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 61.6px */
  max-width: 75%;
  margin-bottom: 32px;
}
.arrow {
  position: absolute;
  top: 32px;
  right: 32px;
}
.items {
  display: flex;
  align-items: center;
  gap: 16px;
}
.item {
  border-radius: 500px;
  border: 1px solid #7e7e90;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.item p {
  color: #7e7e90;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.text {
  color: #7e7e90;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  padding: 30px 0;
}
.right {
  border-radius: 32px;
  overflow: hidden;
}
.right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 48px 0;
  }
  .cardo {
    padding: 16px;
    border-radius: 16px;
  }
  .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 16px;
  }
  .items {
    gap: 8px;
  }
  .item {
    gap: 4px;
    padding: 4px 12px;
  }
  .item p {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }
  .left {
    gap: 8px;
  }
  .text {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    padding: 0;
  }
  .right {
    border-radius: 16px;
  }
}
</style>
