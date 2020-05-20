<template>
    <div>
        <div class="banner">
            <img v-lazy="url" alt>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           url:"https://oss.my51share.com/wmss/assets/img/product_banner.png"
        };
    },
    components: {

    },
};
</script>

<style scoped lang="stylus">
.banner{
    height:508px;
    width:1920px
}
</style>
