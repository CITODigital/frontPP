<template lang='pug'>
    main
        section.main_info
            .container.main-info_container
                    .title
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
                .wrapper_sveden
                    .elem_sveden
                    .elem_sveden
                    .elem_sveden
                    .elem_sveden
                    .elem_sveden
                    .elem_sveden
            .container_sveden
                p Направления деятельности
                .wrapper_activities
                    .elem_activ
                    .elem_activ
                    .elem_activ
                    .elem_activ
                    .elem_activ
                    .elem_activ
                .button
                    button Посмотреть все
        section.main_info.main_info_cont
            .container.container_cont.main-info_container
                    .title
                        span Контакты
                    .wrapper_cont
                        .left_cont
                            p.p_title <b>Центральная приемная коммисия</b>
                            <br>
                            .title_cont
                                p 344000, г. Ростов-на-Дону, пл. Гагарина, д. 1, каб. 108
                                <br>
                                p <b>Время работы:</b> Понедельник - Пятница с 9.00 до 17.00 <br> Перерыв с 13.00 до 14.00. Суббота с 9.00 до 14.00
                                <br>
                                p <b>E-mail:</b> spu-33@donstu.ru
                                p <b>Телефон:</b>8(863) 273-85-66, 8-800-100-19-30
                        .right_cont
                            p.p_title <b>Кампус университета</b>
                            <br>
                            .title_cont
                                p 344000, обл Ростовская, г Ростов-на-Дону, пл. Гагарина, д. 1
                                <br>
                                p <b>E-mail:</b>reсeption@donstu.ru
                                p <b>Телефон:</b>8(632) 73-85-25
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
.title {
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
        margin-bottom: 40px;
    }
}
.wrapper_sveden {
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-auto-rows: 220px;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    padding-bottom: 70px;
}
.elem_sveden {
    background: white;
    box-shadow: 0 16px 16px #dde6eb;
    padding: 30px;
}
.wrapper_activities {
    display: grid;
    grid-template-columns: repeat(2, 540px);
    grid-auto-rows: 180px;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    padding-bottom: 40px;

}
.elem_activ {
    background: white;
    box-shadow: 0 16px 16px #dde6eb;
}
.button {
    margin: 0 auto;
}
button {
    background-color: #0D5ADC;
    color: white;
    width: 232px;
    height: 60px;
    border: none;
    cursor: pointer;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
}
.container_cont {
    padding-top: 60px;
    min-height: 530px;
}
.main_info_cont {
    margin-top: 40px;
}
.title_cont {
    font-size: 14px;
    line-height: 24px;
}
.p_title {
    font-size: 18px;
}
.wrapper_cont {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 30px;
}
</style>