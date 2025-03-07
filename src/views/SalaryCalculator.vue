<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <SalaryInput />
      </div>
      <div class="col-sm-4">
        <SalaryResult />
      </div>
    </div>
  </div>
</template>
  
  <script>
  import Navbar from '@/components/calculator/Navbar.vue';
  import SalaryInput from '@/components/calculator/SalaryInput.vue';
  import SalaryResult from '@/components/calculator/SalaryResult.vue';


  export default {
    name: 'SalaryCalculatorView',
    components: {
      Navbar,
      SalaryInput,
      SalaryResult,
    },
  }
  </script> 
  
  <style>

  </style>
  