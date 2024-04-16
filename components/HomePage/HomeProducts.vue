<template>
  <div class="wrap">
    <div class="container">
      <h4 class="section__title">
        {{ $store.state.translations["main.products"] }}
      </h4>
      <div class="cats">
        <button
          class="cat"
          @click="deleteCat()"
          :class="{ disabled: Object.keys($route.query).length == 0 }"
        >
          {{ $store.state.translations["main.all"] }}
        </button>
        <button
          class="cat"
          v-for="cat in categories"
          :key="cat.id"
          @click="sortCategory(cat.id)"
          :class="{ disabled: $route.query.category == cat.id }"
        >
          {{ cat.title }}
        </button>
      </div>
      <div class="items">
        <ProductCard v-for="item in products" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../ProductCard.vue";
import productsApi from "@/api/products";

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      products: [],
    };
  },

  props: ["categories"],

  async fetch() {
    const productsData = await productsApi.getProducts(this.$axios, {
      params: this.$route.query,
      headers: {
        language: this.$i18n.locale,
      },
    });

    this.products = productsData;
  },

  methods: {
    async sortCategory(value) {
      let query = { ...this.$route.query };
      query.category = value;
      if (!Object.keys(this.$route.query).includes(`${value}`)) {
        await this.$router.replace(
          this.localePath({
            path: this.$route.path,
            query: query,
          })
        );
      }

      this.changeProducts();
    },

    async deleteCat() {
      await this.$router.replace(
        this.localePath({
          path: `/`,
        })
      );

      this.changeProducts();
    },

    async changeProducts() {
      const productsData = await productsApi.getProducts(this.$axios, {
        params: this.$route.query,
        headers: {
          language: this.$i18n.locale,
        },
      });

      this.products = productsData;
    },
  },
};
</script>

<style scoped>
.wrap {
  padding: 88px 0;
}
.cats {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 48px;
}
.cat {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  padding: 8px 24px;
  border-radius: 70px;
  background: #f4f4f7;
  backdrop-filter: blur(12px);
}
.cat.disabled {
  pointer-events: none;
  background: #009a10;
  color: white;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 44px 0;
    overflow: hidden;
  }
  .cats {
    gap: 8px;
    flex-wrap: nowrap;
    overflow: scroll;
    padding: 0 16px;
    margin: 16px -16px 24px -16px;
  }
  .cats::-webkit-scrollbar {
    display: none;
  }
  .cats {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .cat {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    padding: 8px 24px;
    white-space: nowrap;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    row-gap: 20px;
  }
}
</style>
