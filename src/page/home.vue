<template>
    <div>   
        <h1>HOme</h1>
    </div>
</template>
<script>
export default {
  data() {
    return {
      currentUser: localStorage.getItem('currentUser')
    }
  }
}
</script>
