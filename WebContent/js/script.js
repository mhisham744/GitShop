	$(document).ready(function() {


			
		
		$('#dtn a, #breadcrumb a[node]')
		.live('click', function _onClick(e) {
			var $this = $(this),
			name = $this.attr('node'),
			showType = $this.attr('showType');
			doNavigate(name, showType);
			e.stopPropagation();
			e.preventDefault();
			return false;
		});    

		
		$('#icLogo')
		.live('click', function _onClick(e){	
			open("http://www.ibm.com/solutions/sap/us/en/landing/centers_sap_solutions_consulting.html");
		});


		$('#view_selection a').click(function() {
			var view_type = $(this).attr('id');
			$('#view_selection a').removeClass('active');
			$(this).toggleClass('active');
			toggle_view(view_type);
			return false;
		});
    
    
    $('#color-everything-by').change(function() {
			color_by(this[this.selectedIndex].innerHTML);
			return false;
		});
    
    $('#size-by').change(function() {
			size_by(this[this.selectedIndex].innerHTML);
			return false;
		});
		
	});




$(function() {
	var controlsVisible = true;
	$('#left-sidebar-toggle').click(function() {
		controlsVisible = ! controlsVisible;
		if (controlsVisible) 
			$('#left-sidebar-container').slideDown('slow');
		else 
			$('#left-sidebar-container').slideUp('slow');
	});
});
$(function() {
	var controlsVisible = true;
	$('#right-sidebar-toggle').click(function() {
		controlsVisible = ! controlsVisible;
		if (controlsVisible) 
			$('#right-sidebar-container').slideDown('slow');
		else 
			$('#right-sidebar-container').slideUp('slow');
	});
});


function keyToLookup(key) {
	var firstPartEnds = key.indexOf(':');
	if (firstPartEnds <= 0)
		return { key: key, type: key, title: key };

	var firstPart = key.substring(0, firstPartEnds);
	var secondPart = key.substring(firstPartEnds + 1);

	return { key: key, type: firstPart, title: secondPart };
}



function hide_color_chart() {
	var right = $('#right-sidebar');
	var rightContainer = $('#right-sidebar-container');
	right.fadeOut(500, function () {
		rightContainer.empty();
	});
}


function show_color_chart(what_to_color_by, color_mapper) {
    var right = $('#right-sidebar');
    rightContainer = $('#right-sidebar-container');
    right.fadeOut(500, function () {
		rightContainer.empty();
		
		var lookup = keyToLookup(what_to_color_by);
		if (lookup.title == 'currentSection'){
			lookup.title = 'Current Store Location'
		}
		$('<h2>' + lookup.title + '</h2>').appendTo(rightContainer);

		var table = $('<table />');
		for (var key in color_mapper) {
			var row = $('<tr/>');

			var cell = $('<td/>');
			var square = $('<div style="width: 15px; height: 15px; background: ' + color_mapper[key] + ';">&nbsp;</div>');
			square.appendTo(cell);
			cell.appendTo(row);

			cell = $('<td/>');
			cell.text(' ' + key + ' ');
			cell.appendTo(row);
			row.appendTo(table);
		}

		table.appendTo(rightContainer);
		right.fadeIn(500);
});
}



String.prototype.camelToProper = function () {
 if (this == null || this == "") {
  return this;
 }
 var newText = "";
 var characters = this.split("");
 for (var i = 0; i < characters.length; i++) {
  if (!(!isNaN(parseFloat(characters[i])) && isFinite(characters[i])) 
 && characters[i] == characters[i].toUpperCase()
 && i != 0
 && !(characters[i + 1] == characters[i + 1].toUpperCase())
 && characters[i - 1] != " ") {
 newText += " ";
  }
  newText += characters[i];
 }
 newText = newText.charAt(0).toUpperCase() + newText.slice(1);
 return newText;
}