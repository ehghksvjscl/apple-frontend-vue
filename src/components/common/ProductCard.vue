<template>
  <div>
    <img 
        @click="$emit('openModal', idx)" 
        selected_product="idx" 
        :src="product.img_path" 
        class="product-img"
    >
    <h4>{{ product.name }}</h4>
    <p>{{ product.price }}</p>
    <button @click="$emit('PlusComplaintCnt', idx)">허위매물 신고</button> 
    <span>신고 수 : {{ product.complaint_cnt }}</span>
  </div>
</template>
<script>
  export default {
      name: 'ProductCard',
        props: {
            idx: Number,
            product: Object,
    }
  }
</script>
<style>
.product {
    text-align: center;
}
.product-img {
    width: 100%;
    margin-top: 40px;
}
</style>