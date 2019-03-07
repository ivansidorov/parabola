<template>
    <div>
        <span class="formula">Y = <input type="number" v-model="a_local" class="formulainput"/>X<sup>2</sup> + <input type="number"  v-model="b_local" class="formulainput" />X + <input type="number" v-model="c_local" class="formulainput" /></span>
    </div>
</template>

<script>
export default {
    props: {
        a: Number, 
        b: Number,
        c: Number
    },
    data () {
        return {
            a_local: 0,
            b_local: 0,
            c_local: 0
        }
    },
    mounted () {
        this.a_local = this.a
        this.b_local = this.b
        this.c_local = this.c
    },
    watch: {
        a_local () {
            this.$emit('update:a', +this.a_local)
        },
        b_local () {
            this.$emit('update:b', +this.b_local)
        },
        c_local () {
            this.$emit('update:c', +this.c_local)
        },
    } 
}
</script>

<style scoped lang="scss">
.formula {
    font-size: 2rem;
    font-weight: 900;
    & .formulainput{
        width: 2rem;
        height: 2rem;
        margin-bottom: 5px;
        font-family: 'Poiret One';
        font-size: 2rem;
        text-align: center;
        font-weight: 900;
    }
}
</style>
