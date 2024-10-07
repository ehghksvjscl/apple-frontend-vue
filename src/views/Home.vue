<template>
  <div class="menu"></div>

  <div v-if="modal_plug" class="black-bg">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
      <button @click="modal_plug=false">닫기</button>
    </div>
  </div>

  <div v-for="product in products" :key="product.name" class="product">
    <img @click="modal_plug=true" :src="product.img_path" alt="product image" class="product-img">
    <h4>{{ product.name }}</h4>
    <p>{{ product.price }}</p>
    <button @click="plus_complaint_cnt(product)">허위매물 신고</button> 
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
