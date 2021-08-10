<template lang='pug'>
    main
        section.landing-slider
            .container.landing-slider__container
                    .slider
                        .slider__content(style='left: 0')
                            .slider__page
                                .choose-best
                                    h1.choose-best__heading
                                        | Выбирай лучшее -
                                        br
                                        span
                                            | поступай
                                            img.choose__bets-text-back.choose-best__postypai(src='/img/postypai.svg')
                                        span
                                            |   правильно
                                            img.choose__bets-text-back.choose-best__right(src='/img/right.svg')
                                    img.choose-best__image(src="/img/slider-1-img-alt.svg")
                            .slider__page
                                .choose-best
                                    h1.choose-best__heading
                                        span
                                            | Твой
                                            img.choose__bets-text-back.choose-best__your(src='/img/your.svg')
                                        span
                                            |  билет
                                            img.choose__bets-text-back.choose-best__ticket(src='/img/ticket.svg')
                                        br
                                        | в будущее
                                    img.choose-best__image(src="/img/slider-2-img-alt.svg")
                            .slider__page
                                .choose-best
                                    h1.choose-best__heading
                                        | Открывай
                                        span
                                            |  новые
                                            img.choose__bets-text-back.choose-best__new(src='/img/new.svg')
                                        br
                                        span
                                            | возможности
                                            img.choose__bets-text-back.choose-best__opportunities(src='/img/opportunities.svg')
                                    img.choose-best__image(src="/img/slider-3-img.png")
                        .choose-best__button-container
                            button.button.choose-best__button НАЧАТЬ ПОИСК
                        .slider__switchers
                            .slider__switcher.slider__switcher_on#0
                            .slider__switcher.slider__switcher_off#1
                            .slider__switcher.slider__switcher_off#2
        section.main-nav
            .container.main-nav__container
                    .main-nav-buttons
                        .main-button.shadowed
                            .main-button__icon.main-button__icon_active
                                include ../../public/img/university.svg
                            span.main-button__text Государственные вузы
                        .main-button.shadowed
                            .main-button__icon.main-button__icon_inactive
                                include ../../public/img/plusone.svg
                            span.main-button__text Направления подготовки
                        .main-button.shadowed
                            .main-button__icon.main-button__icon_inactive
                                include ../../public/img/rules.svg
                            span.main-button__text Правила поступления
        section.navigator
            .container.navigator__container
                    h2.navigator__heading Как поступить в вуз
                    .slider.navigator__slider
                        .slider__content(style='left: 0')
                            .slider__page.navigator__slider-page-1
                                .navigator__steps.navigator__steps-slider
                                    .navigator__step
                                        .navigator__step-icon
                                            lord-icon(src="https://cdn.lordicon.com/msoeawqm.json"
                                                trigger="hover"
                                                colors="primary:#0d5adc,secondary:#EF4058"
                                                style="width:74px;height:74px")
                                        .navigator__step-number 1
                                        .navigator__step-heading
                                            span.navigator__step-subhead Выберите
                                            br
                                            span  специальность
                                    .navigator__step
                                        .navigator__step-icon
                                            lord-icon(src="https://cdn.lordicon.com/jjjmlddk.json"
                                                trigger="hover"
                                                colors="primary:#0d5adc,secondary:#ef4058"
                                                style="width:86px;height:84px")
                                        .navigator__step-number 2
                                        .navigator__step-heading
                                            span.navigator__step-subhead Выберите
                                            br
                                            span  вуз
                                    .navigator__step
                                        .navigator__step-icon
                                            lord-icon(src="https://cdn.lordicon.com/tvyxmjyo.json"
                                                trigger="hover"
                                                colors="primary:#0d5adc,secondary:#0d5adc"
                                                style="width:106px;height:92px")
                                        .navigator__step-number 3
                                        .navigator__step-heading
                                            span.navigator__step-subhead Сдайте
                                            br
                                            span  ЕГЭ*
                            .slider__page
                                .choose-best
                            .slider__page
                                .choose-best
                        .slider__switchers
                            .slider__switcher.slider__switcher_on#0
                            .slider__switcher.slider__switcher_off#1
                            .slider__switcher.slider__switcher_off#2
                    .navigator__ifrequired *При необходимости
                    .navigator__steps
                        .navigator__step
                            .navigator__step-icon
                                lord-icon(src="https://cdn.lordicon.com/msoeawqm.json"
                                trigger="hover"
                                colors="primary:#0d5adc,secondary:#EF4058"
                                style="width:74px;height:74px")
                            .navigator__step-number 1
                            .navigator__step-heading
                                span.navigator__step-subhead Выберите
                                br
                                span  специальность
                        .navigator__step
                            .navigator__step-icon
                                lord-icon(src="https://cdn.lordicon.com/jjjmlddk.json"
                                trigger="hover"
                                colors="primary:#0d5adc,secondary:#ef4058"
                                style="width:86px;height:84px")
                            .navigator__step-number 2
                            .navigator__step-heading
                                span.navigator__step-subhead Выберите
                                br
                                span  вуз
                        .navigator__step
                            .navigator__step-icon
                                lord-icon(src="https://cdn.lordicon.com/tvyxmjyo.json"
                                trigger="hover"
                                colors="primary:#0d5adc,secondary:#0d5adc"
                                style="width:106px;height:92px")
                            .navigator__step-number 3
                            .navigator__step-heading
                                span.navigator__step-subhead Сдайте
                                br
                                span  ЕГЭ*
                        .navigator__step
                            .navigator__step-icon
                                lord-icon(src="https://cdn.lordicon.com/puvaffet.json"
                                trigger="hover"
                                colors="primary:#0d5adc,secondary:#ef4058"
                                style="width:96px;height:98px")
                            .navigator__step-number 4
                            .navigator__step-heading
                                span.navigator__step-subhead Подайте
                                br
                                span  заявление
                                br
                                span о приеме в вуз
                        .navigator__step
                            .navigator__step-icon
                                lord-icon(src="https://cdn.lordicon.com/rcopausw.json"
                                    trigger="hover"
                                    colors="primary:#0d5adc,secondary:#0d5adc"
                                    style="width:105px;height:114px")
                            .navigator__step-number 5
                            .navigator__step-heading
                                span.navigator__step-subhead Сдайте
                                br
                                span вступительные
                                br
                                span испытания*
                        .navigator__step
                            .navigator__step-icon
                                lord-icon(src="https://cdn.lordicon.com/nocovwne.json"
                                    trigger="hover"
                                    colors="primary:#0d5adc,secondary:#ef4058"
                                    style="width:94px;height:114px")
                            .navigator__step-number 6
                            .navigator__step-heading
                                span.navigator__step-subhead Подайте
                                br
                                span  заявление
                                br
                                span о согласии
                                br
                                span на зачисление в вуз
                        .navigator__step
                            .navigator__step-icon
                                lord-icon(src="https://cdn.lordicon.com/yyecauzv.json"
                                    trigger="hover"
                                    colors="primary:#0d5adc,secondary:#ef4058"
                                    style="width:94px;height:114px")
                            .navigator__step-number 7
                            .navigator__step-heading
                                span.navigator__step-subhead Принесите
                                br
                                span оригиналы
                                br
                                span документа
                                br
                                span об образовании
                        .navigator__step
                            .navigator__step-icon
                                lord-icon(src="https://cdn.lordicon.com/hdiorcun.json"
                                    trigger="hover"
                                    colors="primary:#0d5adc,secondary:#0d5adc"
                                    style="width:130px;height:114px")
                            .navigator__step-number 8
                            .navigator__step-heading
                                span.navigator__step-subhead Пройдите
                                br
                                span медицинское
                                br
                                span обследование*
        section.news
            .container
                .news__wrapper
                    h2.news__heading Новости
                    .news__block
                        article.news__item.shadowed
                            .news__item-img-block
                                img.news__item-img(src="/img/news/1.jpg")
                            .news__item-content
                                h3.news__item-heading Минобрнауки России объявляет конкурс для абитуриентов и студентов #ЯпоступаюОНЛАЙН
                                h4.news__item-subhead Для участия в конкурсе необходимо снять ролик длительностью не более 30 секунд на одну из тем.
                                .news__item-date 08.07.2021
                        article.news__item.shadowed
                            .news__item-img-block
                                img.news__item-img(src="/img/news/2.jpeg")
                            .news__item-content
                                h3.news__item-heading К суперсервису «Поступление в вуз онлайн» подключились 442 российских вуза и 93 филиала
                                h4.news__item-subhead С каждым годом российские абитуриенты все активнее используют дистанционные способы подачи документов.
                                .news__item-date 25.06.2021
                        article.news__item.shadowed
                            .news__item-img-block
                                img.news__item-img(src="/img/news/3.jpg")
                            .news__item-content
                                h3.news__item-heading «Университеты России готовы к приемной кампании 2021/2022»
                                h4.news__item-subhead «Все российские вузы готовы к приемной кампании, в настоящий момент большинство учебных заведений работает очно», - сообщил министр науки и высшего образования Валерий Фальков.
                                .news__item-date 24.06.2021
        section.interesting
            .container
                .interesting__wrapper
                    h2.interesting__heading Вам может быть интересно
                    .interesting__block
                        article.interesting__item
                            .interesting__item-img-block
                                img.interesting__item-img(src="/img/achievments.png")
                            .interesting__item-content
                                h5.interesting__item-heading Онлайн-сервис самопроверки
                        article.interesting__item
                            .interesting__item-img-block
                                img.interesting__item-img(src="/img/enter-logo.png")
                            .interesting__item-content
                                h5.interesting__item-heading Информация о приемной кампании
                        article.interesting__item
                            .interesting__item-img-block
                                img.interesting__item-img(src="/img/ege-seeklogo.png")
                            .interesting__item-content
                                h5.interesting__item-heading Проверка результатов ЕГЭ
</template>

<script>
export default {

}
</script>

<style lang='scss'>
</style>