<template>
  <div id="app">
    <navbar />
    <carousel />
    <products />
    <cart />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import carousel from '@/components/Carousel.vue'
import products from '@/components/Products.vue'
// import cart from '@/components/Cart.vue'

export default {
  name: 'App',
  components: {
    navbar,
    carousel,
    products,
    // cart
    
  }
}
</script>


