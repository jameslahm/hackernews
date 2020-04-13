<template>
	<div id="app">
		<header class="header">
			<nav class="inner">
				<router-link to="/" exact>
					<img src="~public/logo-48.png" alt="logo" class="logo" />
				</router-link>
				<router-link to="/top">Top</router-link>
				<router-link to="/new">New</router-link>
				<router-link to="/show">Show</router-link>
				<router-link to="/ask">Ask</router-link>
				<router-link to="/job">Job</router-link>
				<a
					href="https://github.com/vuejs/vue-hackernews-2.0"
					target="_blank"
					class="github"
				>
					Built By Jameslahm
				</a>
			</nav>
		</header>
		<transition name="fade" mode="out-in">
			<router-view class="view"></router-view>
		</transition>
	</div>
</template>

<style lang="stylus">
body
    font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size 15px
    background-color lighten(#eceef1,30%)
    margin 0
    padding-top 55px
    color #34495e
    overflow-y scroll

a 
    color #34495e
    text-decoration none 

.header 
    background-color #ff6600
    position fixed
    height 55px
    top 0
    left 0
    right 0
    z-index 999
    .inner 
        max-width 800px
        box-sizing border-box 
        margin 0px auto 
        padding 15px 15px
    a  
        color rgba(255,255,255,.8)
        line-height 24px
        transition color .15s ease 
        display inline-block
        vertical-align middle
        font-weight 300
        letter-spacing .075em
        margin-right 1.8em
        &:hover
            color #fff 
        &:router-link-active
            color #fff 
        &:nth-child(6)
            margin-right 0
    .github 
        color #fff 
        font-size .9em
        margin 0
        float right
.logo 
    width 24px
    margin-right 10px
    display inline-block
    vertical-align middle 

.view
    max-width 800px
    margin 0 auto 
    position relative

.fade-enter,.fade-leave-to 
    opacity 0

.fade-enter-active,.fade-leave-active 
    transition all .2s ease 

@media (max-width  600px)
    .header 
        .inner 
            padding 15px
        a 
            margin-right 1em
        .github 
            display none
</style>
