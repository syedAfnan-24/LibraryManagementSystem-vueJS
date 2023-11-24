<template>
  <my-nav firstOption="Login" firstHref="/login" secondOption="SignUp" secondHref="/signup"></my-nav>
  <!-- hero section -->
  <header class="hero">
    <div class="hero-content" data-aos="fade-up" data-aos-duration="5000">
      <h1>Library Management System</h1>
      <p>Find the books you need</p>
    </div>
  </header>
  <!-- hero section end -->
  <features-section></features-section>
  <footer-section></footer-section>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
.hero {
  background-image: url('../assets/hero.jpg');/* Replace with your image URL */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}

.hero-content {
  max-width: 800px;
  padding: 20px;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: white;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.532);
}

.hero p {
  font-size: 24px;
  margin-bottom: 30px;
  color: white;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.516);
}
</style>

