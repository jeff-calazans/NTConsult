<template>
    <h1 class="font-weight-bold" style="font-size: 24px;">Destaques</h1>
    <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="item in data.items" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                <v-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="300" width="200" :image="item"
                    @click="toggle">
                    <div class="d-flex fill-height align-center justify-center">
                        <v-scale-transition>
                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                        </v-scale-transition>
                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>

    <h1 class="font-weight-bold" style="font-size: 24px;">Fim de semana</h1>
    <v-sheet class="mx-auto mb-5">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="item in data.items" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                <v-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="300" width="200" :image="item"
                    @click="toggle">
                    <div class="d-flex fill-height align-center justify-center">
                        <v-scale-transition>
                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                        </v-scale-transition>
                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script setup lang="ts">

const data = reactive<Any>({
    items: [
        "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/07/hotel-fazenda-santa-catarina-capa-820x430.jpg",
        "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/03/melhores-resorts-all-inclusive-capa-820x431.jpeg",
        "https://media-cdn.tripadvisor.com/media/photo-s/16/f2/69/4b/ocean-palace-beach-resort.jpg",
        "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/02/09/251728509-que-tal-apostar-em-nas-cabanas-de-madeira-com-varanda-aconchegante-fonte-kat-alves.jpg",
        "https://s3.amazonaws.com/static-webstudio-accorhotels-usa-1.wp-ha.fastbooking.com/wp-content/uploads/sites/2/2016/11/07110456/Le-Spa-by-LOccitane-806x465.jpg"
    ]
});
</script>