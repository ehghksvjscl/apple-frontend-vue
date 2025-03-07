<template>
 <div class="card shadow-sm mb-3">
    <div class="card-body">
      <p class="lead">예상 월 실수령액은 <span class="fw-bold highlight-green">{{ salary_result }}</span>원이에요.</p>
      <table class="table caption-top table-hover">
        <caption>4대 보험</caption>
        <thead>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">국민연금</th>
            <td class="text-end">{{ national_pension }}원</td>
          </tr>
          <tr>
            <th scope="row">건강보험</th>
            <td class="text-end">{{ health_insurance }}원</td>
          </tr>
          <tr>
            <th scope="row">장기요양</th>
            <td class="text-end">{{ long_term_care }}원</td>
          </tr>
          <tr>
            <th scope="row">고용보험</th>
            <td class="text-end">{{ employment_insurance }}원</td>
          </tr>
          <tr class="table-light">
            <th scope="row">소계</th>
            <td class="text-end">{{ insurance_total }}원</td>
          </tr>
        </tbody>
      </table>
      <table class="table caption-top table-hover">
        <caption>세금</caption>
        <thead>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">근로소득세</th>
            <td class="text-end">{{ income_tax }}원</td>
          </tr>
          <tr>
            <th scope="row">지방소득세</th>
            <td class="text-end">{{ local_income_tax }}원</td>
          </tr>
          <tr class="table-light">
            <th scope="row">소계</th>
            <td class="text-end">{{ tax_total }}원</td>
          </tr>
        </tbody>
      </table>

      <div class="form-text">본 모의계산 결과는 오차가 있을 수 있으며, 법적효력이 없습니다.</div>
    </div>
  </div>
</template>
  
<script setup>
  import { ref, computed } from 'vue'

  const salary_result = ref(0);
  const national_pension = ref(1);      // 국민연금
  const health_insurance = ref(0);      // 건강보험
  const long_term_care = ref(0);        // 장기요양
  const employment_insurance = ref(0);  // 고용보험

  // 4대 보험 총합 (computed 속성 사용)
  const insurance_total = computed(() => 
      national_pension.value + 
      health_insurance.value + 
      long_term_care.value + 
      employment_insurance.value
  );

  const income_tax = ref(0);        // 근로소득세
  const local_income_tax = ref(0);  // 지방소득세

  // 소득세 총합
  const tax_total = computed(() => 
      income_tax.value + local_income_tax.value
  );

</script> 
  
  <style>
  </style>
  