<template>
  <div class="wrap">
    <div class="container">
      <div class="desc">
        <h4 class="title">Описание</h4>
        <div class="html">
          Комплект простыня на резинке и наволочки произведен из экологически
          чистого хлопкового волокна. Трикотаж довольно мягкая и удобная ткань,
          она проста в уходе, приятна на ощупь и красива. Такая ткань хорошо
          впитывает влагу, но также и быстро сохнет, а еще очень легко
          натягивается на матрас. На белье из трикотажа комфортно спать.
          Наволочки имеют большой запАх - 30 см.
        </div>
      </div>
      <div class="care">
        <h4>Как ухаживать</h4>
        <ul>
          <li>
            Цветные изделия стирают при температуре до 30 градусов, машинным
            способом в режиме "Деликатная стирка" или "Трикотаж".
          </li>
          <li>Сушить лучше на открытом воздухе в расправленном виде.</li>
          <li>
            Утюжить изделия очень легко. Утюг с паром также облегчит процесс
            утюжки белья, при этом его температура не должна превышать 200
            градусов.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.desc,
.care {
  max-width: 833px;
}
.title {
  color: var(--Black, #020105);
  font-family: var(--medium);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 2px solid #009a10;
  margin-bottom: 16px;
  display: inline-block;
}
.html {
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.desc {
  margin-bottom: 32px;
}
.care h4 {
  color: var(--Black, #020105);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  margin-bottom: 16px;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 24px;
}
li {
  list-style: disc;
  color: var(--grey-80, #353437);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
</style>
