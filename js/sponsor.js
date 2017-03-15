$(function() {
	$("input[type=checkbox]").on("click", updateBenefits);
});

var updateBenefits = function() {
	$("input[name=Benefits]").val("");
	$.each($("input[type=checkbox]:checked"), function(i, benefit) {
		if (i === 0)
			$("input[name=Benefits]").val(benefit.value);
		else
			$("input[name=Benefits]").val($("input[name=Benefits]").val() + ", " + benefit.value);
	})
}