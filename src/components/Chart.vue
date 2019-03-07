<template>
    <div>
        <canvas id="canvas" width="500" height="500"></canvas>
    </div>
</template>

<script>
export default {
    props: {
        arr: Array
    },
    data () {
        return {}
    },
    methods: {
        /*
        *
        * Построение графика функции
        * @param {array} arr
        *
        */
        CreateCanvas (arr) {
            let canvas = document.getElementById("canvas");
            if (canvas.getContext) {
                let ctx = canvas.getContext("2d");
                ctx.clearRect(0, 0, canvas.width, canvas.height); //очищаем холст
                ctx.strokeStyle = "lightgray";
                
                for (let i = 0; i < canvas.width; i += 25) { // строим сетку 
                    for (let j = 0; j < canvas.height; j += 25) {
                        ctx.strokeRect(i, j, 25, 25);
                    }
                }

                ctx.strokeStyle = "black";
                ctx.beginPath()
                ctx.moveTo(canvas.width / 2, 0)
                ctx.lineTo(canvas.width / 2, canvas.height) // строим координатную прямую

                ctx.stroke()

                ctx.beginPath()
                ctx.moveTo(0, canvas.height / 2)
                ctx.lineTo(canvas.width, canvas.height / 2) // строим координатную прямую
                ctx.stroke()
                ctx.moveTo(arr[0].x, arr[0].y)
                ctx.strokeStyle = "black";
                ctx.quadraticCurveTo( arr[1].x,arr[1].y, arr[2].x,arr[2].y)
                ctx.stroke()
            }
        }
    },
    mounted () {
        this.CreateCanvas(this.arr)
    },
    watch: {
       arr () {
           this.CreateCanvas(this.arr)
       }
    }
}
</script>

<style>

</style>
