<template>
    <div :class="filter" class="aden filter-item" :style="{backgroundImage: 'url('+ add_image_url + ')'}" @click="fire">
        <slot></slot>
    </div> 
</template>
  
<script>


 export default {
    name: 'FilterBoxView',
    props: {
        add_image_url: String,
        filter: String
    },
    methods: {
        fire() {
            this.emitter.emit('fire', this.filter)
        }
    }
}
</script> 

<style>
    .filter-item {
        width: 100px;
        height: 100px;
        margin: 10px 10px 10px auto;
        padding: 8px;
        display: inline-block;
        color : white;
        background-size: cover;
        background-position : center;
    }
</style>
