<template lang='pug'>
    main
        section.main_info
            .container.main-info_container
                    .vuz_name
                        span Федеральное государственное бюджетное образовательное учреждение высшего образования «Донской государственный технический университет»
                    .vuz_setting
                        .vuz_cont
                            .vuz_logo
                                img(src='/img/LogoFUDGTU.svg')
                            .vuz_ser
                                p Лицензия от 27.06.2016 №2245. Бессрочно
                                p Ректор Бесарион Чохоевич Месхи
                                p donstu.ru
        section.main-nav
            .container.main-nav__container
                .main-nav-buttons
                    .main-button.shadowed
                        .main-button__icon_active
                            include ../../public/img/PagePriem.svg
                        span.main-button__text Страница приемной компании
                    .main-button.shadowed
                        .main-button__icon_inactive
                            include ../../public/img/ProcPriem.svg
                        span.main-button__text Узнать о порядке приема
                    .main-button.shadowed
                        .main-button__icon_inactive
                            include ../../public/img/SeatsPriem.svg
                        span.main-button__text Актуальное количество мест
        section.main-sveden
            .container_sveden
                p Общие сведения
                hr
                .wrapper
                    .elem_sveden
                    .elem_sveden
                    .elem_sveden
                    .elem_sveden
                    .elem_sveden
                    .elem_sveden
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
main {
    background-color: #F4F9FC;
}
.main_info {
    background: white;
}
.main-info_container {
    max-width: 1110px;
    min-height: 400px;
    padding-top: 80px;
}
.vuz_name {
    min-height: 122px;
    margin-bottom: 40px;
    span {
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        letter-spacing: 0.02em;
    }
}
.vuz_setting {
    height: 148px;
}
.vuz_cont {
    align-items: center;
    display: flex;
}
.vuz_logo {
    min-width: 100px;
    height: 100px;
    display: contents;
}
.vuz_ser {
    margin-left: 30px;
    p {
        margin: 0px;
        font-size: 16px;
        line-height: 30px;
    }
}
.main-button__text {
    font-size: 17px;
    line-height: 20px;
}
.main-sveden {
    background-color: #F4F9FC;
}
.container_sveden {
    max-width: 1110px;
    margin: 0 auto;
    p {
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
    }
}
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-auto-rows: 220px;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    font-family: Museo Sans Cyrl;
}
.elem_sveden {
    background: white;
    box-shadow: 0 16px 16px #dde6eb;
}
</style>