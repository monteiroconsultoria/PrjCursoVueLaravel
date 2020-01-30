<template>
    <div class="card">
        <div class="card-header">{{titulo}}</div>

        <div class="card-body">
             {{texto}}
        </div>
    </div>
</template>

<script>
    export default {
        props:['titulo','texto']
    }
</script>
