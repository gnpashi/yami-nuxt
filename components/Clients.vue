<template>
    <div class="clients content" id="clients">
        <div class="client-first has-background-pink has-text-white p-2 py-4">
            <div class="client-text">
                <p>
                    גיל אדם ישר מאוד ומקסים , מחירים הכי טובים של אוכל סופר פרימיום מצויין  ביחס לחנויות אחרות ,אני מזמינה ובאותו יום האוכל אצלי תמיד עם צ'ופר נחמד לכלבים. ממליצה בחום רב מאוד  להזמין ממנו גם מקבלים מוצר מעולה גם יחס מעולה גם שירות מעולה וגם מחיר מעולה .
                   </p>
                <cite class="my-2">ענבר כץ</cite>
            </div>
            <div class="client-img">
                <img class="p-2" src="https://www.farmina.com/fotoprodotti/cibau-puppy-maxi@web.png" alt="">
            </div> 
        </div>
        <div class="client-second has-background-link-dark has-text-white p-2 py-4">
            <div class="client-text">
                <p>
                    אני מאד מאד מאד מרוצה מהשירות של גיל.
תמיד מגיע גם אם אני מבקשת ברגע האחרון           
                </p>
                <cite class="my-2">דניאלה סולווי</cite>
            </div> 
            <div class="client-img">
                <img class="p-2" src="https://www.farmina.com/fotoprodotti/159_23_matisse-neutered-salmon@web.png" alt="">
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
})
</script>
<style scoped>
    .has-background-pink{
        background-color:hsla(284, 59%, 64%, 1)
;
    }
</style>