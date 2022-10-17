<template>
  <div class="background">
    <SignUp />
  </div>
</template>

<script>
import SignUp from '../components/SignUp'

export default {
  name: 'HomeView',
  components: {
    SignUp
  }
}
</script>
<style scoped>
.background {
  width: 100vw;
  height: 87vh;
  background: radial-gradient(
      farthest-side at top left,
      rgba(104, 164, 243, 0.5),
      transparent
    ),
    radial-gradient(
      farthest-side at top right,
      rgba(140, 253, 109, 0.5),
      transparent
    ),
    radial-gradient(
      farthest-side at bottom left,
      rgba(248, 132, 78, 0.5),
      transparent
    ),
    radial-gradient(
      farthest-corner at bottom right,
      rgba(68, 68, 68, 0.5),
      transparent
    );
}
</style>
