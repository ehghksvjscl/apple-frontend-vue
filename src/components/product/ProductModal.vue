<template>
  <div v-if="modal_plug" class="black-bg">
    <div class="white-bg">
      <h4>{{ products[selected_product].name }}</h4>
      <p>{{ products[selected_product].content }}</p>
      <img :src="products[selected_product].img_path" alt="product image" class="product-img">
      <p>{{ products[selected_product].price }}</p>
      <v-text-field v-model="month" label="개월"></v-text-field>
      <p>{{ month }}개월 선택함 : {{ products[selected_product].price * month }}원</p>
      <v-btn color="primary" @click="$emit('closeModal')">닫기</v-btn>
    </div>
  </div>
</template>
<script>
export default {
    name: 'ProductModal',
    data() {
        return {
            month: 1
        }
    },
    watch : {
      month(val) {
        if (val < 1) {
          alert('1개월 이상 선택해주세요')
          this.month = 1
        } else if (val > 12) {
          alert('12개월 이하로 선택해주세요')
          this.month = 12
        } else if (isNaN(val)) {
          alert('숫자만 입력해주세요')
          this.month = 1
        }
      },
    },
    props: {
        products: Array,
        selected_product: Number,
        modal_plug: Boolean
    },
    updated() {
      if (this.month == 2) {
        alert('2개월 선택함')
      }
    }
}
</script>
<style>
input {
  border-color: black;
}
</style>