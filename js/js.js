jQuery(document).ready(function($) {
		$("#fullpage").fullpage({
			menu: '#menu',
            anchors:['Page1','Page2','Page3','Page4','Page5','Page6','Page7'],
            slideNavigation: true,
            slideNavPosition: 'bottom',
            navigation: true,
            navigationTooltips: ['Главаная','Качество','Модули','Бонусы','Купить','Отзывы','Гарантия'],
            showActiveTooltip: true
});
})
