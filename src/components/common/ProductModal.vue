<template>
  <div v-if="modal_plug" class="black-bg">
    <div class="white-bg">
      <h4>{{ products[selected_product].name }}</h4>
      <p>{{ products[selected_product].content }}</p>
      <img :src="products[selected_product].img_path" alt="product image" class="product-img">
      <p>{{ products[selected_product].price }}</p>
      <v-btn 
        color="primary"
        @click="$emit('closeModal')"
      >닫기</v-btn>
    </div>
  </div>
</template>
<script>
export default {
    name: 'ProductModal',
    props: {
        products: Array,
        selected_product: Number,
        modal_plug: Boolean
    }
}
</script>
<style>

</style>