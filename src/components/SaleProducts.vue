<template>
  <div class="sale-products">
    <div class="sale-box">
      <img src="../assets/images/sale-1.jpg" alt="" />
      <a href="">
        <div class="sale-text">
          <strong>Bag With Rose Pattern</strong>
          <span>Sale off 25%</span>
        </div>
      </a>
    </div>
    <div class="sale-box">
      <img src="../assets/images/sale-2.jpg" alt="" />
      <a href="">
        <div class="sale-text">
          <strong>Bag With Rose Pattern</strong>
          <span>Sale off 25%</span>
        </div>
      </a>
    </div>
    <div class="sale-box">
      <img src="../assets/images/sale-3.jpg" alt="" />
      <a href="">
        <div class="sale-text">
          <strong>Bag With Rose Pattern</strong>
          <span>Sale off 25%</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sale-products {
  width: 95% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px auto;

  .sale-box {
    width: 280px;
    border-radius: 20px;
    margin: 20px;
    position: relative;
    flex-grow: 0.5;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center right;
    }

    a {
      color: #1b1919;

      .sale-text {
        position: absolute;
        left: 20%;
        top: 50%;
        transform: translate(-20%, -50%);
        display: flex;
        justify-content: center;
        flex-direction: column;

        strong {
          font-size: 1.2rem;
          font-weight: 500;
          width: 80%;
          line-height: 23px;
        }
      }
    }
  }
}
</style>
