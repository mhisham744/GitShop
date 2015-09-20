function CustomTooltip(tooltipId, width){
	var tooltipId = tooltipId;
	$("#bubble_graph").append("<div class='tooltip' id='"+tooltipId+"'></div>");
	
  $("#"+tooltipId).click(function ( event ) {
      event.preventDefault();
      $(this).hide();
    });
    
	if(width){
		$("#"+tooltipId).css("width", width);
	}
	
	hideTooltip();
	
	function showTooltip(content, event){
		$("#"+tooltipId).html(content);
		$("#"+tooltipId).show();
	  $("#"+tooltipId)[0].style.backgroundColor = getSelectedBubbleColor();
    
		updatePosition(event);
	}
	
	function hideTooltip(){
    // $("#"+tooltipId).animate({width: 0px, height:0px}, 2000);
		$("#"+tooltipId).hide();
	}
	
	function updatePosition(event){
		var ttid = "#"+tooltipId;
		var xOffset = 35;
		var yOffset = 350;
		
		 var ttw = $(ttid).width();
		 var tth = $(ttid).height();
		 var wscrY = $(window).scrollTop();
		 var wscrX = $(window).scrollLeft();
		 var ttleft = ((wscrX + xOffset*2 + ttw) > $(window).width()) ? ttw - xOffset*2 : xOffset;
		 if (ttleft < wscrX + xOffset){
		 	ttleft = wscrX + xOffset;
		 } 
		 var tttop = ((wscrY + yOffset*2 + tth) > $(window).height()) ? tth - yOffset*2 : yOffset;
		 if (tttop < wscrY + yOffset){
		 	tttop = yOffset;
		 } 
		 $(ttid).css('top', tttop + 'px').css('left', ttleft + 'px');
	}
	
	return {
		showTooltip: showTooltip,
		hideTooltip: hideTooltip,
		updatePosition: updatePosition
	}
}
