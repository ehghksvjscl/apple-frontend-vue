<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <SalaryInput />
      </div>
    </div>
  </div>
</template>
  
  <script>
  import Navbar from '@/components/calculator/Navbar.vue';
  import SalaryInput from '@/components/calculator/SalaryInput.vue';


  export default {
    name: 'SalaryCalculatorView',
    components: {
      Navbar,
      SalaryInput,
    },
  }
  </script> 
  
  <style>

  </style>
  