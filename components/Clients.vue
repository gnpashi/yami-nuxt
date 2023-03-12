<template>
    <div class="clients content" id="clients">
        <div class="client-first has-background-pink has-text-white p-2 py-4">
            <div class="client-text subtitle is-4 has-text-white">
                <p>
                    גיל אדם ישר מאוד ומקסים , מחירים הכי טובים של אוכל סופר פרימיום מצויין  ביחס לחנויות אחרות ,אני מזמינה ובאותו יום האוכל אצלי תמיד עם צ'ופר נחמד לכלבים. ממליצה בחום רב מאוד  להזמין ממנו גם מקבלים מוצר מעולה גם יחס מעולה גם שירות מעולה וגם מחיר מעולה .
                   </p>
                <cite class="my-2">ענבר כץ</cite>
            </div>
            <div class="client-img">
                <nuxt-img format="webp" class="p-2" :src="images.client1.path"  />

            </div> 
        </div>
        <div class="client-second has-background-link-dark has-text-white p-2 py-4 subtitle is-4">
            <div class="client-text">
                <p>
                    אני מאד מאד מאד מרוצה מהשירות של גיל.
תמיד מגיע גם אם אני מבקשת ברגע האחרון           
                </p>
                <cite class="my-2">דניאלה סולווי</cite>
            </div> 
            <div class="client-img">
                <nuxt-img format="webp" class="p-2" :src="images.client2.path"  />

            </div> 
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Clients',

    created() {
        console.log('Clients created')
    },
    data() {
        return {
            images: {
                client1: { path: "client1.png" },
                client2: { path: "client2.png" },
            }
    }
    }
})
</script>
<style scoped>
    .has-background-pink{
        background-color:hsla(284, 59%, 64%, 1)
;
    }
    @media screen and (min-width: 768px) {
        .client-first, .client-second{
            padding-inline: 10rem!important;
            display: flex;
        }
        .client-second{
            flex-direction: row-reverse;
        }
        .client-img,
        .client-text{
            width: 50vw;  
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

        }
    }
</style>