<template>
  <div class="card shadow-sm mb-3">
    <div class="card-header d-flex">
      <span class="me-auto">입력하기</span>
      <span class="ms-1"><a href="">🔄</a></span>
    </div>

    <div class="card-body">
      <div class="mb-3">
        <span class="d-flex">
        <label for="basic-url" class="form-label dropdown-toggle me-auto" data-bs-toggle="dropdown" aria-expanded="false">{{ select_salary_lable }} 금액</label>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="selectSalaryLable('연봉')" href="#">연봉</a></li>
            <li><a class="dropdown-item" @click="selectSalaryLable('월급')" href="#">월급</a></li>
          </ul>

        <input class="form-check-input text-bg-dark border-black" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label ms-1 text-secondary" for="flexCheckChecked">퇴직금 별도</label>
        </span>

        <div class="input-group">
          <input 
            type="text" 
            class="form-control text-end" 
            aria-label="Amount (to the nearest dollar)"
            :value=salary
            @input="onSalaryChange"
            placeholder="0"
          >
          <span class="input-group-text">원</span>
        </div>

        <div class="form-text text-end d-none d-sm-block" id="basic-addon4">1년 동안 받는 급여의 총합을 입력합니다.</div>
        
        <div class="mt-1 gap-2 d-flex justify-content-end">
          <button class="btn btn-light btn-sm scale-effect" type="button" @click="addSalary(1_000_000)">+백만원</button>
          <button class="btn btn-light btn-sm scale-effect" type="button" @click="addSalary(10_000_000)">+천만원</button>
        </div>
      </div>
      <div class="mb-3">
          <label for="basic-url" class="form-label">비과세액</label>
          <div class="input-group">
            <input 
              type="text" 
              class="form-control text-end" 
              aria-label="Amount (to the nearest dollar)" 
              :value=non_taxable_amount
              @input="onNonTaxableAmountChange"
              placeholder="0"
            >
            <span class="input-group-text">원</span>
          </div>
          <div class="form-text text-end d-none d-sm-block" id="basic-addon4">급여총액 중 과세되지 않는 금액을 입력합니다.</div>
          <div class="mt-1 gap-2 d-flex justify-content-end">
          <button class="btn btn-light btn-sm" type="button" @click="addNonTaxableAmount(50_000)">+오만원</button>
          <button class="btn btn-light btn-sm" type="button" @click="addNonTaxableAmount(100_000)">+십만원</button>
          </div>
        </div>
      <div class="mb-3">
          <label for="basic-url" class="form-label">부양가족수</label>
          <div class="input-group">
              <button class="btn btn-outline-secondary border-secondary-subtle" type="button">+</button>
              <button class="btn btn-outline-secondary border-secondary-subtle" type="button">-</button>

            <input type="text" class="form-control text-end" aria-label="Amount (to the nearest dollar)" value="1" placeholder="1">
            <span class="input-group-text">명</span>
          </div>
          <div class="form-text text-end d-none d-sm-block" id="basic-addon4">본인을 포함한 부양가족의 수를 입력합니다.</div>
      </div>
      <div class="mb-3">
          <label for="basic-url" class="form-label">20세 이하 자녀수</label>
          <div class="input-group">
              <button class="btn btn-outline-secondary border-secondary-subtle" type="button">+</button>
              <button class="btn btn-outline-secondary border-secondary-subtle" type="button">-</button>

            <input type="text" class="form-control text-end" aria-label="Amount (to the nearest dollar)" value="0" placeholder="0">
            <span class="input-group-text">명</span>
          </div>
          <div class="form-text text-end d-none d-sm-block" id="basic-addon4">자녀의 수를 입력합니다.</div>
        </div>
    </div>
  </div>


</template>
  
<script setup>
  import { ref } from 'vue';

  // ✅ 상태 변수 선언 (Composition API)
  const salary = ref("0");
  const non_taxable_amount = ref("0");
  const select_salary_lable = ref('연봉');

    // 숫자만 입력되도록 하는 함수
  const onlyNumber = (value) => {
    value = value.replace(/[^0-9]/g, '');
    return Number(value).toLocaleString('ko-KR');
  };
  const onSalaryChange = (event) => {
    let value = event.target.value;
    salary.value = onlyNumber(value) 
    event.target.value = salary.value;
  };

  const onNonTaxableAmountChange = (event) => {
    let value = event.target.value;
    non_taxable_amount.value = onlyNumber(value) 
    event.target.value = non_taxable_amount.value;
  };

  // 값을 더하는 함수
  const addSalary = (amount) => salary.value = (parseInt(salary.value.toString().replace(/,/g, ''), 10) + amount).toLocaleString('ko-KR');
  const addNonTaxableAmount = (amount) => non_taxable_amount.value = (parseInt(non_taxable_amount.value.toString().replace(/,/g, ''), 10) + amount).toLocaleString('ko-KR');

  // 라벨 변경 함수
  const selectSalaryLable = (lable) => select_salary_lable.value = lable;

</script> 
  
  <style>
    .card {
        border: 2px solid red;
    }
  </style>
  