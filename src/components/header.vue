<template lang= 'pug'>
    header.header
        .container.header__container
            nav.header__nav
                .header__logo
                    a.content-link.header__logo-link(href='/')
                        span.logo
                            img.header__logo-image(src='/img/logo_head.png')
                            span.header__logo-text ПОСТУПАЙ ПРАВИЛЬНО
                .header__actions
                    .header__action
                        a.content-link(href='/profile')
                            span.header__action-title ВОЙТИ
                            img.header__action-icon(src='/img/user.png')
</template>

<script>
export default {

};
</script>
