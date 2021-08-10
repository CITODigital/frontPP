<template lang='pug'>
    main
        section 
            .container.container-padding  
                h1 Иванова М.И.
                .block.shadowed
                    img(src='/img/gosuslugi.svg')
                    .block__content
                        a Привязка учетной записи портала Госуслуг позволит вам при подаче заявления на поступление в вуз онлайн через Госуслуги получить доступ к избранным вузам, сохраненным в личном кабинете портала Поступай Правильно.
                        button.whiteButton Подать заявление в вузы онлайн
        section
            .container.container-padding 
                .box
                    h2 Предметы и баллы ЕГЭ
                    div
                        img.pencil(src='/img/pencil.svg')
                        a Редактировать
                .boxEge   
                    div.subject Русский язык
                        input(value='10')
                        span 10
                    div.subject Математика
                        input(value='10')
                        span 10
                    div.subject Биология
                        input(value='10')
                        span 10
                    div.subject Иностранный язык   
                        input(value='10')
                        span 10
        section
            .container
                h2 Избранное
                .buttons
                    button.miniButton Вузы
                    button.miniButtonGrey#trigger Направления
                .blockUniversity#moveleft
                    img.logo(src='/img/gerb.png')
                    .blockUniversity__content
                        a.nameUni(href='/') Донской государственный технический университет
                        p.regionUni Ростовская область
                    .like-compare 
                        button.like
                        button.compare
                .blockDirections
                    img.pic(src='/img/hat.svg')
                    .blockDirections__content
                        a Педагогическое
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
main {
    background-color: #F4F9FC;
}
.container-padding {
    margin-bottom: 60px;
}
h1 {
font-weight: 500;
font-size: 48px;
line-height: 60px;
letter-spacing: 0.02em;
color: #3B4157;
}
.block {
    display: grid;
    grid-auto-flow: column;
    height: 200px;
    background-color:rgba(255, 255, 255, 1);
    align-content: space-around;
    grid-gap: 40px;
    padding: 0 30px 0 30px;
}
.block__content {
    display: grid;
    grid-gap: 30px;
}
a {
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
}
.whiteButton {
    height: 40px;
    width: 315px;
    background-color: white;
    border: 2px solid #0D5ADC;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    color: #0D5ADC;
}
.box {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 360px 150px;
    align-items: center;
    margin-bottom: 40px;
}
.box a {
    color: #0D5ADC;
    font-size: 14px;
    line-height: 17px;
    margin-left: 10px;
}
.boxEge {
    display: grid;
    grid-template-columns: repeat(2, 0.35fr);
    row-gap: 20px;
}
.subject span {
        color: #36935B;
    }
.pencil {
    margin-left: 20px;
}

.subject {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 200px 50px;
}
.subject input {
    width: 40px;
    display: none;
}
.blockUniversity { 
    display: grid;
    grid-auto-flow: column;
    padding-top: 50px;
    padding-bottom: 30px;
}
.like-compare {
    display: grid;
}
.blockDirections {
    /* display: grid; */
    display: none;
    grid-auto-flow: column;
    padding-top: 50px;
    padding-bottom: 30px; 

}
.pic {
    width: 50px;
    height: 50px;
}
.buttons {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 42px 100px;
    grid-gap: 10px;
    margin-top: 40px;
}
/* Buttons */
/*можно вынести в layout.css  */
.miniButton {
    background-color: #0D5ADC;
    color: white;
    height: 20px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
  }
  .miniButtonGrey {
    background-color: #EAF3FB;
    color: #A4A9B9;
    height: 20px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
  }
  .like {
    background: url(/img/like.svg) 50% 50% no-repeat;
    width: 28px;
    height: 22px;
    border: none;
    cursor: pointer;
  }
  .liked {
    background: url(/img/liked.svg) 50% 50% no-repeat;
  }
  .compare {
    background: url(/img/compare.svg) 50% 50% no-repeat;
    background-size: contain;
    width: 28px;
    height: 22px;
    border: none;
  }
</style>