<template>
  <div :style="reduceStyle" v-if="showDiscount==true">
    <ProductDiscount/>
  </div>
  <button @click="priceSort">가격 정렬</button>
  <br>
  <button @click="priceSortDesc">가격 역순 정렬</button>
  <br>
  <button @click="priceSortUnder500000">50만원 이하 만</button>
  <br>
  <button @click="nameSort">가나다 순</button>
  <br>
  <button @click="priceSortOrigin">원복</button>

  <Transition name="fade">
    <ProductModal 
      :products="products" 
      :selected_product="selected_product" 
      :modal_plug="modal_plug"
      @closeModal="modal_plug=false"
    />
  </Transition>
  
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

function priceSort() {
  this.products.sort((a, b) => a.price - b.price)
}

function priceSortOrigin() {
  this.products = [...this.products_origin]
}

function priceSortDesc() {
  this.products.sort((a, b) => b.price - a.price)
}

function priceSortUnder500000() {
  this.products = this.products.filter(product => product.price <= 500000)
}

function nameSort() {
  this.products.sort((a, b) => a.name - b.name)
}

// components
import ProductDiscount from '@/components/product/ProductDiscount.vue';
import ProductModal from '@/components/product/ProductModal.vue';
import productCard from '@/components/product/ProductCard.vue';

// data
import sample_products from '@/assets/data/sample-products'


export default {
  name: 'HomeView',
  data () {
    return {
      showDiscount : true,
      scale: 1,
      reduceStyle: {
        transform: `scale(${this.scale})`,
        transition: 'transform 1s ease-in-out'
      },
      selected_product: 0,
      modal_plug: false,
      products_origin: [...sample_products],
      products: sample_products
    }
  },
  methods: {
    PlusComplaintCnt,
    priceSort,
    priceSortOrigin,
    priceSortDesc,
    priceSortUnder500000,
    nameSort
  },
  components: {
    ProductDiscount,
    ProductModal,
    productCard,
  },
  mounted() {
    this.interval_id = setInterval(() => {
      if (this.scale <= 0) {
        this.showDiscount = false
        clearInterval(this.interval_id)
      } else {
        this.reduceStyle.transform = `scale(${this.scale-=0.1})`
      }
    }, 1000);
  },
}
</script> 

<style>
.move-enter-from {
  transform: scale(0)
}
.move-enter-active {
  transition: all 1s;
}
.move-enter-to {
  transform: scale(1)
}

.fade-enter-from {
  transform: scale(0)
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: scale(1)
}

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
