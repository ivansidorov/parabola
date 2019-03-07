<template>
    <div class="container">
        <h2>Введите переменные</h2>
        <formula class="formula" :a.sync="a" :b.sync="b" :c.sync="c"></formula>
        <chart :arr="arr"></chart>        
    </div>
</template>

<script>
import * as math from '../helpers/math.js'

import Chart from '../components/Chart.vue'
import Formula from '../components/Formula.vue' 
export default {
    components: {
        Chart,
        Formula
    },
    data () {
        return {
            a: 1,
            b: 0,
            c: 0
        }
    },
    computed: {
        /*
        *
        * Вычисление начальной, конечной и контрольной точек
        * @return {array}
        *
        */
        arr () {
            return math.GrafArray(this.a,this.b,this.c)
        }
    }
}
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        & .formula {
            margin: 0 0 15px 0;
        }
    }
</style>
