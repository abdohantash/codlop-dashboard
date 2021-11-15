$(function() {
	
	$('.select2').select2({
		placeholder: 'Choose one',
		searchInputPlaceholder: 'Search',
		minimumResultsForSearch: Infinity,
		width: '100%'
	});

	$('.select2-with-search').select2({
		searchInputPlaceholder: 'ابحث هنا',
		width: '100%'
	});
});
