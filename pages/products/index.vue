<template>
  <div class="master">
    <SiteTop />

    <div class="container categories">
      <h4 class="section__title title">Каталог товаров</h4>
      <div class="items">
        <div class="item" v-for="category in categories" :key="category.id">
          <div
            @click="sortCategory(category.id)"
            :class="{ disabled: $route.query.category == category.id }"
          >
            <div class="img">
              <img :src="category.image" alt="" />
            </div>
            <p class="name">{{ category.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container products">
      <div class="header">
        <h4 class="section__title">Наша продукция</h4>
        <!-- <div class="cats">
          <button class="cat" v-for="cat in categories" :key="cat.id">
            {{ cat.title }}
          </button>
        </div> -->

        <div
          class="cats"
          v-show="
            Object.entries($route.query).filter((resetter) => resetter[0])
              .length > 0
          "
        >
          <div
            v-for="cat in categories.filter((item) =>
              Object.entries($route.query)
                .filter((element) => element[0])
                .find((one) => one[1] == item.id)
            )"
            :key="cat.id"
            class="cat"
          >
            <p>{{ cat.title }}</p>
            <button @click="deleteCat(cat.id)" class="x">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.2427 7.75786L7.75739 16.2431M16.2427 16.2431L7.75739 7.75781"
                  stroke="#9CAFCB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="items">
        <ProductCard v-for="item in products" :key="item.id" :item="item" />
      </div>
    </div>

    <BlueForm class="form" />
  </div>
</template>

<script>
import BlueForm from "~/components/BlueForm.vue";
import SiteTop from "~/components/SiteTop.vue";

import categoriesApi from "@/api/categories";
import productsApi from "@/api/products";

export default {
  components: {
    BlueForm,
    SiteTop,
  },

  async asyncData({ $axios, query, i18n }) {
    const categories = await categoriesApi.getCategories($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });
    const products = await productsApi.getProducts($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      categories,
      products,
    };
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
          path: `/products`,
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
.categories {
  padding: 80px 0 95px 0;
}
.categories .item .disabled {
  pointer-events: none;
}
.categories .item {
  cursor: pointer;
}
.categories .item .disabled img {
  border-width: 3px !important;
  border-color: #009a10 !important;
}

.categories .title {
  margin-bottom: 48px;
}

.categories .items {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}
.categories .img img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #7e7e90;
}
.categories .name {
  color: var(--Black, #020105);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  display: block;
  font-family: var(--medium);
  margin-top: 16px;
}
.form {
  margin-bottom: 88px;
}
@media screen and (max-width: 1024px) {
  .container {
    padding-inline: 16px !important;
  }
  .categories {
    padding-block: 44px;
  }
  .form {
    margin-bottom: 44px;
  }
  .categories .wrap {
    overflow: hidden;
    padding-bottom: 44px;
  }
  .categories .title {
    margin-bottom: 8px;
  }
  .categories .sub {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 24px;
  }
  .categories .items {
    overflow-x: scroll;
    margin: 0 -16px;
    padding: 0 16px;
  }
  .categories .items::-webkit-scrollbar {
    display: none;
  }
  .categories .items {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .categories .item {
    width: 144px;
  }
  .categories .img img {
    width: 144px;
    height: 144px;
  }
  .categories .name {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-top: 16px;
  }
}

.products {
  padding: 0 0 88px 0;
}
.products .header {
  display: flex;
  align-items: center;
  gap: 48px;
  margin-bottom: 40px;
}
.products .cats {
  display: flex;
  align-items: center;
  gap: 24px;
}
.products .cat {
  color: var(--Green, #009a10);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
  padding: 8px 24px;
  border-radius: 70px;
  background: #f4f4f7;
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  gap: 8px;
}
.products .items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.x {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
@media screen and (max-width: 1024px) {
  .products .wrap {
    padding: 44px 0;
    overflow: hidden;
  }
  .products .cats {
    gap: 8px;
    flex-wrap: nowrap;
    overflow: scroll;
    padding: 0 16px;
    margin: 16px -16px 24px -16px;
  }
  .products .cats::-webkit-scrollbar {
    display: none;
  }
  .products .cats {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .products .cat {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    padding: 8px 24px;
    white-space: nowrap;
  }
  .products .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    row-gap: 20px;
  }
  .products {
    padding-bottom: 44px;
  }
  .products .header {
    gap: 16px;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  .products .cats {
    margin: 0;
    padding: 0;
  }
}
</style>
