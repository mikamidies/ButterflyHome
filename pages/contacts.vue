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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5989.768431077782!2d69.21937832064897!3d41.354870316336054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c428de7d5d3%3A0x126b83530bb25f52!2z0J7Qu9C80LDQt9C-0YA!5e0!3m2!1sru!2s!4v1710920871628!5m2!1sru!2s"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
