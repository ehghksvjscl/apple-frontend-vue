<template>
  <ProductDiscount/>
  <ProductModal 
    :products="products" 
    :selected_product="selected_product" 
    :modal_plug="modal_plug"
    @closeModal="modal_plug=false"
  />
  <productCard 
    @openModal="modal_plug=true; selected_product=$event"
    @PlusComplaintCnt="PlusComplaintCnt(products[$event])"
    v-for="(product, idx) in products" :key="idx" :product="product" :idx="idx" 
  />
</template>

<script>
function PlusComplaintCnt(product) {
  product.complaint_cnt++;
}

// components
import ProductDiscount from '@/components/common/ProductDiscount.vue';
import ProductModal from '@/components/common/ProductModal.vue';
import productCard from '@/components/common/ProductCard.vue';

// data
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
    PlusComplaintCnt
  },
  components: {
    ProductDiscount,
    ProductModal,
    productCard
  }
}
</script> 

<style>
.menu {
  width: 100%; height: 50px;
  background: #333; color: white;
  text-align: center; line-height: 50px;
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
