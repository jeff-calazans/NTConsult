<template>
    <v-container id="search">
        <v-row style="background-color: #FFFF00; border-radius: 5px;" class="pa-0">
            <v-col cols="12" md="3">
                <v-text-field v-model="data.destiny" variant="solo" prepend-inner-icon="mdi-map-marker" label="Destino"
                    hide-details>
                </v-text-field>
            </v-col>

            <v-col cols="12" md="2">
                <VDateInput v-model="data.checkin" label="Entrada" prepend-icon="" prepend-inner-icon="mdi-calendar"
                    variant="solo" hide-details></VDateInput>
            </v-col>

            <v-col cols="12" md="2">
                <VDateInput v-model="data.checkout" label="Saída" prepend-icon="" prepend-inner-icon="mdi-calendar"
                    variant="solo" hide-details>
                </VDateInput>
            </v-col>

            <v-col cols="12" md="5" class="d-flex justify-space-between">
                <v-text-field v-model="data.guess" class="pr-5 h-100" model="[0, 5]" style="width: 5px" type="number"
                    variant="solo" hide-details prepend-icon="" prepend-inner-icon="mdi-account"
                    label="hospedes"></v-text-field>
                <v-text-field v-model="data.rooms" class="pr-5 h-100" model="[0, 5]" style="width: 5px" type="number"
                    variant="solo" hide-details prepend-icon="" prepend-inner-icon="mdi-bed"
                    label="quartos"></v-text-field>
                <VBtn class="h-100" color="#003b95" @click="Search()">Buscar</VBtn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { VDateInput } from 'vuetify/labs/VDateInput'

const data = reactive<Any>({
    destiny: "",
    checkin: Date().now,
    checkout: Date().now,
    guess: 1,
    rooms: 1,
    fetchList: []
})


async function Search() {
    let filters = {
        destiny: data.destiny,
        checkin: data.checkin,
        checkout: data.checkout,
        guess: data.guess,
        rooms: data.rooms
    }

    data.fetchList = [{
        photo: "https://s3.amazonaws.com/static-webstudio-accorhotels-usa-1.wp-ha.fastbooking.com/wp-content/uploads/sites/2/2016/11/07110456/Le-Spa-by-LOccitane-806x465.jpg",
        name: "Hotel Principal",
        review: "9",
        price: "200"
    },
    {
        photo: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/02/09/251728509-que-tal-apostar-em-nas-cabanas-de-madeira-com-varanda-aconchegante-fonte-kat-alves.jpg",
        name: "Pousada Alegria",
        review: "6",
        price: "250"
    },
    {
        photo: "https://media-cdn.tripadvisor.com/media/photo-s/16/f2/69/4b/ocean-palace-beach-resort.jpg",
        name: "Resort Miramar",
        review: "9",
        price: "300"
    },
    {
        photo: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/03/melhores-resorts-all-inclusive-capa-820x431.jpeg",
        name: "Cabana Blue",
        review: "7",
        price: "450"
    },
    {
        photo: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/07/hotel-fazenda-santa-catarina-capa-820x430.jpg",
        name: "Loft Real",
        review: "8",
        price: "500"
    }
    ]

    console.log(data.fetchList)
}

</script>

<style scoped>
#search {
    position: relative;
    top: -50px;
}
</style>