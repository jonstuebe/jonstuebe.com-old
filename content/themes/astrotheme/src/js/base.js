

$(document).ready(function(){


	// PRETTIFY PRE TAGS
	var prettify = false;
	$("pre code").parent().each(function() {
		$(this).addClass('prettyprint');
		prettify = true;
	});

	if(prettify && config.highlightcode == true){
		prettyPrint();
	}


	// PROFILE WAYPOINTS
	if($('#cover').hasClass("featured")){
		$('.posts').waypoint(function(direction) {
			if(direction === "down"){ $('.profile').addClass("stuck").removeClass("featured"); $('.index').fadeIn(400);}
			if(direction === "up"){ $('.profile').removeClass("stuck").addClass("featured"); $('.index').fadeOut(400);}
		});
	}else{
		$('#posttitle, .first').waypoint(function(direction) {
			if(direction === "down"){ $('.profile').addClass("stuck"); $('.index').fadeIn(400);}
			if(direction === "up"){ $('.profile').removeClass("stuck"); $('.index').fadeOut(400);}
		});
	}

	$('.postprofile').waypoint(function(direction) {
		if(direction === "down"){ $('.profile').addClass("hide"); };
		if(direction === "up"){ $('.profile').removeClass("hide"); };
	}, { offset: '100%' });


	// INDEX WAYPOINTS
	if($('#posttitle').length){
		var list = [];
		$('.postbody h2').waypoint(function(direction) {
			var e = $(this);
			if(direction === "down"){ 
				$('.index h2').fadeOut(function() {
					list.push($('.index h2').text());
					$(this).text($(e).text()).fadeIn();
				});
			};
			if(direction === "up"){ 
				$('.index h2').fadeOut(function() {
					$(this).text(list.pop()).fadeIn();
				});
			};
		});
	}


	// FITVIDS
	$(".postbody").fitVids();
	

	// COMMENTS
	if(config.disqus_shortname != '' && config.disqus_shortname != null && config.disqus_shortname != undefined || config.google_comments == true){
		$('.comments').show();
		if(config.autoload_comments == true){
			loadComments();
			$('.readmore').fadeOut(400);
		}
	}

	function loadComments(){
		if(config.disqus_shortname != ''){
			var disqus_shortname = config.disqus_shortname;
			(function() {
			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
			dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
			})();
		}else if(config.google_comments == true){
			
			$.getScript("https://apis.google.com/js/plusone.js")
			.done(function(script, textStatus ) {
				gapi.comments.render('g-comments', {
					href: window.location,
					width: '760',
					first_party_property: 'BLOGGER',
					view_type: 'FILTERED_POSTMOD'
				});
			});

		}
	}

	$('.readmore').click(function(){
		loadComments();
		$(this).fadeOut(400);
	});


	// ANALYTICS
	if(config.analytics_id != '' || config.analytics_id != null || config.analytics_id != undefined){
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', config.analytics_id, 'auto');
		ga('send', 'pageview');
	}


	// READING TIME
	if(config.readingtime == true){
		$(".postbody").readingTime();
	}


	// FEATURE SCROLL
	$(".movedown").click(function(){
		$("html, body").animate({scrollTop: $('.cover').height()}, 750);
	});


	// SCROLL LINKS
	$('.footnote').click(function(){
		$('html, body').animate({
			scrollTop: ($( $.attr(this, 'href') ).offset().top - 100)
		}, 500);
		return false;
	});


	// RESPONSIVE NAV
	$(".inlinemenu ul").hide();
	$(".inlinemenu .graybar").click(function(){
		$(".inlinemenu ul").slideToggle();
	});
	

});
