<template lang="pug">
    main
        section
            .container
                .uniDir
                    h1 Вузы
                    h1 Направления
                .search
                    input(type='search')
                .block.shadowed
                    .compareBox
                        p В списке сравнения 4 вуза
                        button.whiteButton Сравнить
                        buttonx.x
        section
            .container
                .bigbox
                    div
                        .blockUniversity
                            img.logo(src='/img/gerb.png')
                            .blockUniversity__content
                                a.nameUni(href='/') Донской государственный технический университет
                                p.regionUni Ростовская область
                            .like-compare
                                button.like
                                button.compare
                        hr
                        .blockUniversity
                            img.logo(src='/img/gerb.png')
                            .blockUniversity__content
                                a.nameUni(href='/') Донской государственный технический университет
                                p.regionUni Ростовская область
                            .like-compare
                                button.like
                                button.compare
                        hr
                    .filters.filtersText
                        .select
                            select
                                option(selected) Выбрать субъект РФ
                                option пунтк 2
                        .filterOne Тип учебного заведения
                            .divFilter1
                                button.miniButtonGrey Государственный
                                button.miniButtonGrey Негосударственный
                        .filterTwo Форма обучения
                            .divFilter2
                                button.miniButtonGrey Очная
                                button.miniButtonGrey Очно-заочная
                                button.miniButtonGrey Заочная
                        .select2 Баллы ЕГЭ
                            select
                                option(selected) Выбрать предмет
                                option Химия
                                option Физика
                        .filterThree Стоимость обучения
                            .divFilter2
                                button.miniButtonGrey Бюджет
                                button.miniButtonGrey Платные места
                            .divFilter2
                                div от
                                input
                                div до
                                input
                                div ₽ в год
                        .filterFour Уровень образования
                            .divFilter3
                                button.miniButtonGrey Бакалавриат
                                button.miniButtonGrey Специалитет
                                button.miniButtonGrey Магистратура
                                button.miniButtonGrey Аспирантура
                                button.miniButtonGrey Ординатура
                        .FilterFive Дополнительно
                            .divFilter3
                                button.miniButtonGrey.item1 Подача документов онлайн
                                button.miniButtonGrey.item1 Военно-учебный центр
                                button.miniButtonGrey Общежитие
                                button.miniButtonGrey.item1 Инклюзивное образование
</template>

<style scoped>
a {
    text-decoration: none;
}
.container {
  max-width: 1110px;
  margin: 0 auto;
  box-sizing: border-box;
}
.uniDir {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 80px 1fr;
}
.search {
    padding-bottom: 40px;
}
.search input {
    width: 75%;
    height: 50px;
}
.compareBox {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-template-columns: 1fr 140px 50px;
    grid-gap: 70px;
    padding-left: 30px;
}
.whiteButton {
    height: 30px;
    width: 140px;
    background-color: white;
    border: 2px solid #0D5ADC;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    color: #0D5ADC;
}
.x {
    height: 14px;
    background: url('/img/x.svg') no-repeat;
}
.block {
    display: grid;
    width: 75%;
    height: 80px;
}
.shadowed {
  box-shadow: 0 16px 16px #DDE6EB;
}
.bigbox {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 60% 40%;
    padding-top: 50px;
    grid-gap: 95px;
}
.filters {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: min-content;
}
.filtersText {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #3B4157;
}
.filters input {
    width: 60px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #A6A5A9;
    box-sizing: border-box;
}
select {
    width: 255px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #A6A5A9;
    box-sizing: border-box;
    appearance: none;
    background: url('/img/selectArrow.svg') no-repeat right;
    background-position-x: calc(100% - 4%);
    padding-left: 10px;
}
.filterOne {
    display: grid;
}
.divFilter1 {
    display: grid;
    justify-items: start;
    grid-gap: 10px;
    padding-top: 20px;
}
.filterTwo {
    display: grid;
    grid-auto-columns: max-content;
}
.divFilter2 {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    padding-top: 20px;
    justify-items: start;
    grid-template-columns: max-content;
    align-items: center;
}
.divFilter3 {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 100px );
    justify-items: start;
    padding-top: 20px;
}
.item1 {
    grid-column: 1 / 3;
}
.select2 {
    display: grid;
    grid-gap: 20px;
}

/* повтор. надо вынести в общ файл */
.blockUniversity {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
}
hr {
  border: 1px solid #CDCFD2;
  margin-top: 30px;
  margin-bottom: 30px;
}
.like-compare {
    display: grid;
}
.like {
    background: url('../assets/like.svg') 50% 50% no-repeat;
    width: 28px;
    height: 22px;
    border: none;
    cursor: pointer;
  }
  .liked {
    background: url('../assets/liked.svg') 50% 50% no-repeat;
  }
  .compare {
    background: url('../assets/compare.svg') 50% 50% no-repeat;
    background-size: contain;
    width: 28px;
    height: 22px;
    border: none;
  }
  .miniButton {
    background-color: #0D5ADC;
    color: white;
    width: max-content;
    height: 20px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
  }
    .miniButtonGrey {
    background-color: #E4E4E4;
    color: #A4A9B9;
    height: 20px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
  }
/* --------------------------- */
</style>
