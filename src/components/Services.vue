<template>
  <section class="services">
    <div class="services-box">
      <i class="fa fa-truck" aria-hidden="true"></i>
      <span>Free Shipping</span>
      <p>Free Shipping For All Us orders</p>
    </div>
    <div class="services-box">
      <i class="fa fa-headphones" aria-hidden="true"></i>
      <span>Support 24/7</span>
      <p>We support 24h a day</p>
    </div>
    <div class="services-box">
      <i class="fa fa-refresh" aria-hidden="true"></i>
      <span>100% Money Back</span>
      <p>You have 30 days to Return</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.services {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;

  .services-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.1);
    min-width: 250px;
    padding: 20px;
    margin: 15px;
    flex-grow: 0.7;

    i {
      color: #0b9d8a;
      font-size: 2rem;
      margin: 15px;
    }

    span {
      color: #222222;
      font-weight: 600;
      letter-spacing: 0.5px;
      font-size: 1rem;
    }

    p {
      color: #878787;
      font-size: 0.9rem;
      margin: 0px;
    }
  }
}
</style>
