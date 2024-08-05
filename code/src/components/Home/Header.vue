<template>
  <VContainer>
    <VToolbar density="compact">
      <v-img class="logo" src="https://ntconsult.com.br/wp-content/uploads/2021/08/Logotipo.png"
        max-height="40"></v-img>
    </VToolbar>

    <VSheet color="#003b95" rounded="lg">
      <VTabs v-model="data.tab" :items="data.tabs" color="white" height="60" slider-color="#fff" class="mb-3">
        <template v-slot:tab="{ item }">
          <VTab :prepend-icon="item.icon" :text="item.text" :value="item.value" class="text-none"></VTab>
        </template>

        <template v-slot:item="{ item }">
          <VTabsWindowItem value="tab-1" class="py-4">
            <Stays/>
          </VTabsWindowItem>

          <VTabsWindowItem value="tab-2" class="py-4">
            <Flights />
          </VTabsWindowItem>

          <VTabsWindowItem value="tab-3" class="py-4">
            <Package />
          </VTabsWindowItem>

          <VTabsWindowItem value="tab-4" class="py-4">
            <Promo />
          </VTabsWindowItem>
        </template>
      </VTabs>
    </VSheet>
  </VContainer>
</template>

<script setup lang="ts">
import Stays from '@/components/Stays/Stays.vue'
import Flights from '@/components/Flights/Flights.vue'
import Package from '@/components/Package/Package.vue'
import Promo from '@/components/Promo/Promo.vue'

const data = reactive<Any>({
  tab: 'tab-1',
  tabs: [
    {
      icon: 'mdi-bed',
      text: 'Hospedagens',
      value: 'tab-1',
    },
    {
      icon: 'mdi-airplane',
      text: 'Passagens',
      value: 'tab-2',
    },
    {
      icon: 'mdi-bag-suitcase',
      text: 'Pacotes',
      value: 'tab-3',
    },
    {
      icon: 'mdi-fire',
      text: 'Ofertas',
      value: 'tab-4',
    },
  ],
})
</script>

<style setup scoped>
.v-toolbar {
  background: none;
  color: white;
}
</style>

<style setup>
.logo .v-img__img--contain {
  object-fit: fill !important;
}

.logo .v-img__img,
.v-img__img--contain {
  height: 40px;
  width: 250px !important;
  background: white !important;
}

.v-tab {
  border: 1px solid white !important;
  border-radius: 50px !important;
  margin-right: 10px;
  margin-top: 20px;
}

.v-tab--selected {
  background-color: rgba(47, 69, 71, 0.5) !important;
}

.v-tab.v-tab.v-btn {
  height: 40px !important;
}

.v-tab--selected .v-tab__slider {
  opacity: 0 !important;
}
</style>
