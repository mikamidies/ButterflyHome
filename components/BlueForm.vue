<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <div class="back">
          <img src="@/assets/img/blue.png" alt="" />
        </div>
        <div class="mobile__back">
          <img src="@/assets/img/mobile-blue.png" alt="" />
        </div>
        <div class="left">
          <h4 class="title">Связаться с нами</h4>
          <p class="sub">
            Подпишитесь и читайте интересное о продуктах, экологии, здоровом
            образе жизни
          </p>
          <div class="flex">
            <div class="num">
              <a href="#"> +971 52 246 40 48 </a>
            </div>
            <div class="stick"></div>
            <div class="socials">
              <a href="#">
                <TelegramIcon />
              </a>
              <a href="#">
                <WhatsappIcon />
              </a>
            </div>
          </div>
        </div>
        <div class="right">
          <form>
            <div class="inputs">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Number" />
            </div>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SeedVector from "./SvgIcons/SeedVector.vue";
import TelegramIcon from "./SvgIcons/TelegramIcon.vue";
import WhatsappIcon from "./SvgIcons/WhatsappIcon.vue";

export default {
  components: {
    SeedVector,
    TelegramIcon,
    WhatsappIcon,
  },
};
</script>

<style scoped>
.wrap {
  position: relative;
}
.cardo {
  height: 406px;
  position: relative;
  display: grid;
  grid-template-columns: 5fr 5fr;
  align-items: center;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.back img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.left,
.right {
  position: relative;
  z-index: 3;
}
.left {
  padding-left: 88px;
  max-width: 600px;
}
.title {
  color: var(--White, #fff);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 18px;
}
.sub {
  color: var(--White, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 32px;
}
.flex {
  display: flex;
  align-items: center;
  gap: 28px;
}
.num a {
  color: var(--White, #fff);
  font-family: var(--medium);
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 48px */
}
.stick {
  width: 2px;
  height: 24px;
  background: #fff;
}
.socials {
  display: flex;
  align-items: center;
  gap: 16px;
}
.socials :deep(path) {
  fill: white;
}
.right {
  padding-right: 128px;
  display: flex;
  justify-content: flex-end;
}
form {
  min-width: 475px;
}
.inputs {
  display: grid;
  grid-template-columns: 162px 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
input {
  border-radius: 12px;
  border: 1px solid #2f9bf2;
  background: #0982e5;
  padding: 14px 16px;
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
button {
  color: var(--Black, #020105);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  padding: 14px 16px;
  width: 100%;
  border-radius: 12px;
  background: var(--White, #fff);
}
.mobile__back {
  display: none;
}
@media screen and (max-width: 1024px) {
  .wrap {
    height: auto;
  }
  .cardo {
    grid-template-columns: repeat(1, 1fr);
    height: 360px;
  }
  .back {
    display: none;
  }
  .mobile__back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .mobile__back img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .left {
    padding: 24px 24px 0 24px;
  }
  .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 12px;
  }
  .sub {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 16px;
  }
  .num a {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }
  .flex {
    gap: 16px;
  }
  .socials :deep(svg) {
    width: 24px;
    height: 24px;
  }
  .inputs {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
    margin-bottom: 8px;
  }
  form {
    min-width: unset;
    width: 100%;
  }
  .right {
    padding: 0 24px 24px 24px;
  }
  .container {
    height: 100%;
  }
  input,
  button {
    padding: 12px 16px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
}
@media screen and (max-width: 370px) {
  .mobile__back img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
