<template>
    <a 
    href="#" 
    :class="linkClass"
    >

        {{ linkText }}

    </a>
</template>

<script>
export default {
  name: 'Link',
  props: ['linkText', 'isActive'],
  
  computed: {
    linkClass() {
      let classes = ''
      
      if (this.isActive) {
        classes += ' active-1'
      } else {
        classes += ' active-2'
      }
      
      return classes
    }
  }
}
</script>