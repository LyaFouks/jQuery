$("ul").on("click", "li", function() {
	
	$(this).toggleClass("done");
})
$("ul").on("click", "span", function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(function() {
		$(this).remove();
	})
})

$("input").keypress(function(event) {
	if(event.which === 13) {
		var itemText = $(this).val();
		var spanIcon = $("span");
		$(this).val("");
		$("ul").append("<li>" + itemText + "<span><i class='fa-solid fa-delete-left'></i></span></li>");
	}
})

$("h2 span").click(function() {
	$("input").fadeToggle();
})