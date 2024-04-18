<template>
  <div class="master">
    <SiteTop :current="$store.state.translations['main.layout-5']" />

    <div class="container">
      <div class="top">
        <div class="left">
          <h4 class="title">
            {{ $store.state.translations["inner.love"] }} <br />
            {{ $store.state.translations["inner.talk"] }}
            <img src="@/assets/img/logo/hearth.svg" alt="" />
          </h4>
        </div>
        <div class="right">
          <div class="item">
            <div class="icon">
              <PhoneIcon />
            </div>
            <a :href="`tel:${info.nbm}`">{{ info.nbm }}</a>
          </div>
          <div class="item">
            <div class="icon">
              <LocationIcon />
            </div>
            <p>{{ info.adres }}</p>
          </div>
          <div class="item">
            <div class="icon">
              <EmailIcon />
            </div>
            <a :href="`mailto:${info.email}`">{{ info.email }}</a>
          </div>
        </div>
      </div>

      <div class="mid">
        <div class="sate">
          <p class="par">{{ $store.state.translations["inner.socials"] }}</p>
          <div class="cardo">
            <a :href="`tel:${info.telegram}`" class="soc">
              <span> <TelegramIcon />Telegram: </span>
              <p>{{ info.telegram }}</p>
            </a>
            <a :href="`tel:${info.instagram}`" class="soc">
              <span> <WhatsappIcon />Whatsapp: </span>
              <p>{{ info.nbm }}</p>
            </a>
          </div>
          <div class="num">
            <PhoneIcon />
            <a :href="`tel:${info.nbm}`">{{ info.nbm }}</a>
          </div>
        </div>
        <div class="ute">
          <div class="img">
            <img src="@/assets/img/important.jpg" alt="" />
          </div>
        </div>
      </div>

      <div class="iframe">
        <div style="position: relative; overflow: hidden">
          <a
            href="https://yandex.uz/maps/105813/tashkent-province/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
            >Ташкентская область</a
          ><a
            href="https://yandex.uz/maps/105813/tashkent-province/house/YkAYdwBkTE0HQFprfX5weH9gYg==/?ll=69.174507%2C41.218399&utm_medium=mapframe&utm_source=maps&z=16.89"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
            >Улица Амира Тимура, 2 на карте Ташкентской области — Яндекс
            Карты</a
          ><iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.174507%2C41.218399&mode=whatshere&whatshere%5Bpoint%5D=69.174580%2C41.219336&whatshere%5Bzoom%5D=17&z=16.89"
            width="560"
            height="400"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
          ></iframe>
        </div>
      </div>
    </div>

    <BlueForm class="form" />
  </div>
</template>

<script>
import PhoneIcon from "@/components/SvgIcons/PhoneIcon.vue";
import LocationIcon from "@/components/SvgIcons/LocationIcon.vue";
import EmailIcon from "@/components/SvgIcons/EmailIcon.vue";
import TelegramIcon from "@/components/SvgIcons/TelegramIcon.vue";
import WhatsappIcon from "@/components/SvgIcons/WhatsappIcon.vue";

import infoApi from "@/api/info";

export default {
  components: {
    PhoneIcon,
    LocationIcon,
    EmailIcon,
    TelegramIcon,
    WhatsappIcon,
  },

  data() {
    return {
      info: "",
    };
  },

  async mounted() {
    const infoData = await infoApi.getInfos(this.$axios);

    this.info = infoData.data;
  },
};
</script>

<style scoped>
.top {
  padding: 88px 0 56px 0;
  display: grid;
  grid-template-columns: 5fr 5fr;
}
.title {
  color: var(--Black, #020105);
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: flex-start;
}
.right {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.item {
  display: grid;
  align-items: center;
  grid-template-columns: 32px 1fr;
  gap: 16px;
}
.item p,
.item a {
  color: var(--Black, #020105);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 38.4px */
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon :deep(path) {
  fill: #009a10;
}
.mid {
  border-radius: 24px;
  background: var(--Apple-Grey, #f5f5f7);
  display: grid;
  grid-template-columns: 5fr 5fr;
  overflow: hidden;
  margin-bottom: 70px;
}
.sate {
  padding: 48px 64px;
}
.par {
  color: var(--Black, #020105);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;
}
.cardo {
  border-radius: 20px;
  background: var(--White, #fff);
  padding: 24px 32px 24px 16px;
  display: inline-flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 32px;
}
.soc {
  display: flex;
  align-items: center;
  gap: 12px;
}
.soc:nth-child(1) span {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--Facebook-blue, #1878f3);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
}
.soc:nth-child(2) span {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #064526;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
}
.soc p {
  color: var(--Black, #020105);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
}
.soc :deep(svg) {
  width: 32px;
  height: 32px;
}
.num {
  display: flex;
  align-items: center;
  gap: 24px;
}
.num a {
  color: var(--Green, #009a10);
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 48px */
  font-family: var(--medium);
}
.num :deep(svg) {
  width: 40px;
  height: 40px;
}
.num :deep(path) {
  fill: #009a10;
}
.ute img {
  width: 580px;
  height: 390px;
  object-fit: cover;
  border-radius: 24px;
  transform: translateY(50px);
  position: relative;
  z-index: 2;
}
.img {
  position: relative;
}
.img::after {
  width: 530px;
  height: 360px;
  border-radius: 24px;
  content: "";
  position: absolute;
  top: 64px;
  left: -48px;
  background: #e8eaee;
  transform: rotate(-12deg);
  z-index: 1;
}
.iframe {
  margin-bottom: 80px;
}
iframe {
  width: 100%;
  height: 576px;
  border-radius: 24px;
}
.form {
  margin-bottom: 80px;
}
@media screen and (max-width: 1024px) {
  .top {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
  .title {
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .item a,
  .item p {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .sate {
    padding: 16px;
  }
  .par {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 16px;
  }
  .cardo {
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    margin-bottom: 16px;
  }
  .soc span,
  .soc p {
    font-size: 12px !important;
    font-style: normal !important;
    font-weight: 500 !important;
    line-height: 150% !important;
  }
  .soc :deep(svg) {
    width: 20px;
    height: 20px;
  }
  .num {
    gap: 8px;
  }
  .num a {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .num :deep(svg) {
    width: 18px;
    height: 18px;
  }
  .mid {
    border-radius: 16px;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 48px;
  }
  .img {
    display: flex;
    justify-content: center;
  }
  .ute img {
    width: 300px;
    height: 200px;
    border-radius: 8px;
  }
  .img::after {
    width: 300px;
    height: 200px;
    top: 50px;
    left: 16px;
    border-radius: 8px;
  }
  .top {
    padding: 44px 0;
  }
  .iframe,
  .form {
    margin-bottom: 44px;
  }
  .iframe iframe {
    height: 400px;
    border-radius: 24px;
  }
}
</style>
