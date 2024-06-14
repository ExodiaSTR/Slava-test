<template>
  <header class="header">
    <div class="header__content">
      <div class="header__content-inner">
        <img src="@/assets/images/logo.png" alt="FIGARO" class="header-img" />

        <Button class="header-button">
          Тест-драйв
          <img
            src="@/assets/svg/arrow-right.svg"
            alt=">"
            class="header-button-svg"
          />
        </Button>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  display: flex;
  height: 542px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1250px) {
    margin: 0 -20px;
  }

  &-img {
    position: absolute;
    z-index: 0;
    top: 116px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 1000px) {
      width: 700px;
    }
  }

  &__content {
    background-color: #0abab5;
    width: 100%;
    height: 464px;
    margin: 0 auto;

    @media (max-width: 1250px) {
      padding: 0 20px;
    }
  }

  &__content-inner {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  &-button {
    margin-top: 352px;
    position: relative;
    z-index: 1;
    cursor: pointer;
    width: 282px;
    padding: 9px 15px 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 400;
    font-size: 16px;

    &-svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
