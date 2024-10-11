<template>
  <div class="discount">
    <h4>지금 구입하면 20% 할인</h4>
  </div>

  <div v-if="modal_plug" class="black-bg">
    <div class="white-bg">
      <h4>{{ products[selected_product].name }}</h4>
      <p>{{ products[selected_product].content }}</p>
      <img :src="products[selected_product].img_path" alt="product image" class="product-img">
      <p>{{ products[selected_product].price }}</p>
      <v-btn color="primary" @click="modal_plug=false">닫기</v-btn>
    </div>
  </div>

  <div v-for="(product, idx) in products" :key="product.name" class="product">
    <img @click="modal_plug=true; selected_product=idx" :src="product.img_path" alt="product image" class="product-img">
    <h4>{{ product.name }}</h4>
    <p>{{ product.price }}</p>
    <v-btn small color="primary" @click="plus_complaint_cnt(product)">허위매물 신고</v-btn> 
    <span>신고 수 : {{ product.complaint_cnt }}</span>
  </div>
</template>

<script>
function plus_complaint_cnt(product) {
  product.complaint_cnt++;
}

// 데이터 가져오기
import sample_products from '@/assets/data/sample-products'

export default {
  name: 'HomeView',
  data () {
    return {
      selected_product: 0,
      modal_plug: false,
      products: sample_products
    }
  },
  methods: {
    plus_complaint_cnt
  }
}
</script> 

<style>
.discount {
  text-align: center;
  background-color: #eee;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}

.menu {
  width: 100%; height: 50px;
  background: #333; color: white;
  text-align: center; line-height: 50px;
}

.product {
  text-align: center;
}
.product-img {
  width: 100%;
  margin-top: 40px;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
</style>
