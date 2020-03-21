<template>
    <div id="app">
        <Navigation/>
		<!-- <transition name="view" appear enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutUp"> -->
			<router-view/>
		<!-- </transition> -->
    </div>
</template>



<script>
import Navigation from './components/components/Navigation'

export default {
    name: 'App',
    components: {
		Navigation,
    }
};
</script>



<style lang="scss">
// RESET CSS

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}

html{
	font-size: 62.5%;
}

body{
	box-sizing: border-box;
}


*::after, *::before{
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}


a{
	color:inherit;
	&:hover{
		text-decoration: none;
		color:inherit;
	}
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// RESET CSS

#app{
  background-color:black;
  color:white;
  font-family: 'EB Garamond';
  height: 100%;
  width: 100vw;
}

Navigation{
	z-index: 100;
}

.fadeInUp, .fadeOutDown{
	animation-duration: .6s;
}


</style>