<script setup lang="ts">
import benefitProfitSvg from "@/assets/images/benefit-profit.svg";
import benefitRelevanceSvg from "@/assets/images/benefit-relevance.svg";
import benefitChoiceSvg from "@/assets/images/benefit-choice.svg";
import benefitOnlineSvg from "@/assets/images/benefit-online.svg";
import featureImage from "@/public/feature.png";
import { getData } from "~/api/getSpecials";
import type { SpecialsFeature } from "~/type/Specials";

const specialsData = ref<Awaited<ReturnType<typeof getData>>>();
const res = await getData();
specialsData.value = res;

const tmp = computed((): SpecialsFeature[] | undefined => {
  return specialsData.value?.response.features.filter(
    (el: any) => el.modelName === "Figaro" && el?.description && el?.image
  );
});

const features = computed((): SpecialsFeature[] | undefined => {
  if (tmp)
    return tmp?.value?.map((el: any) => {
      return {
        ...el,
        image:
          el.image.charAt(0) !== "@"
            ? specialsData?.value?.response?.assetsDomain + el.image
            : featureImage,
      };
    });
  else return [];
});

function addFeature() {
  specialsData.value?.response?.features.splice(1, 0, {
    description:
      "Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор.",
    image: "@/public/feature.png",
    imageAlt: "нестационарный гироскопический стабилизатор",
    modelName: "Figaro",
    sorting: 9,
  });
}

const benefits = ref([
  {
    img: benefitProfitSvg,
    title: "выгода",
    description:
      "Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля",
  },
  {
    img: benefitRelevanceSvg,
    title: "актуальность",
    description: "Выберите актуальные для вас сервисные предложения",
  },
  {
    img: benefitChoiceSvg,
    title: "широкий выбор",
    description: "Выберите дилера, который вам подходит",
  },
  {
    img: benefitOnlineSvg,
    title: "онлайн обслуживание",
    description:
      "Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты",
  },
]);
</script>

<template>
  <main class="main">
    <Header />
    <div class="main__content">
      <section class="main__benefits">
        <div class="main__benefits_redline" />
        <h3 class="main__benefits-title">
          Мы ценим Ваше время и комфорт! <br />
          Запишитесь на сервис Nissan онлайн
        </h3>

        <div class="main__benefits_scroll">
          <div class="main__benefits__row">
            <div
              v-for="(item, index) in benefits"
              :key="index"
              class="main__benefits-item"
            >
              <img
                :src="item.img"
                :alt="item.title"
                class="main__benefits-item-svg"
              />

              <h4 class="main__benefits-item-title">
                {{ item.title }}
              </h4>

              <p class="main__benefits-item-description">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="main__special">
        <Loader v-if="specialsData?.pending" :style="{ display: 'block' }" />

        <h3 v-else-if="specialsData?.error">Eto Error :------(</h3>

        <template v-else>
          <h3 class="main__special-title">
            {{
              specialsData?.response.blockHeading ||
              "Уникальные особенности модели"
            }}
          </h3>

          <div class="main__special-grid">
            <div
              v-for="(item, index) in features"
              :key="index"
              class="main__special-grid-item"
            >
              <img
                :src="item?.image"
                :alt="item?.imageAlt"
                class="main__special-grid-item-img"
              />
              <h4 class="main__special-grid-item-description">
                {{ item.description }}
              </h4>
            </div>
          </div>

          <Button class="main__special-button" @click="addFeature"
            >Добавить особенность</Button
          >
        </template>
      </section>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.main {
  padding-bottom: 64px;

  @media (max-width: 1250px) {
    padding: 0 20px 64px;
  }

  &__content {
    margin: 32px auto 0;
    max-width: 1200px;
    width: 100%;
  }

  &__benefits {
    &_redline {
      width: 77px;
      height: 4px;
      background-color: #c10933;
    }

    &-title {
      margin-top: 16px;
      font-weight: 300;
      font-size: 48px;
      line-height: 64px;
      text-transform: uppercase;
      color: #000;

      @media (max-width: 1000px) {
        font-size: 20px;
        text-align: center;
      }
    }

    &_scroll {
      width: 100%;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__row {
      margin-top: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 1100px) {
        width: 100%;
      }
    }

    &-item {
      max-width: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (max-width: 1100px) {
        flex-shrink: 0;
      }

      &-svg {
        width: 178px;
        height: 100px;
      }

      &-title {
        margin-top: 44px;
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        text-transform: uppercase;
        text-align: center;
        color: #000;
      }

      &-description {
        margin-top: 16px;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        text-transform: uppercase;
        text-align: center;
        color: #000;
      }
    }
  }

  &__special {
    display: flex;
    flex-direction: column;
    margin-top: 118px;

    &-title {
      font-weight: 300;
      font-size: 36px;
      line-height: 48px;
      text-transform: uppercase;
      color: #000;
    }

    &-grid {
      margin-top: 48px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-flow: row dense;
      width: 100%;
      gap: 24px;

      @media (max-width: 1000px) {
        grid-template-columns: 1fr;
      }

      &-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;

        &-img {
          width: 100%;
        }

        &-description {
          font-weight: 300;
          font-size: 16px;
          line-height: 26px;
          color: #000;
        }
      }
    }

    &-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      height: 50px;
      width: 280px;
      border: 2px solid #c31631;

      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #000;

      margin-top: 40px;
    }
  }
}
</style>
