var App = angular.module('sae', ['ngSanitize']);


App.controller('carDetails', function($scope, $http) {
	$scope.arr = [];
	$http.get('js/json/cars.json')
	//$http.get('https://gist.githubusercontent.com/dsaket/f534d5c27399e06c9b0e/raw/307f03ecca6fea20b79542088ed9795822f4dbce/todos.json')
	.then(function(res){
	  $scope.arr = res.data;	                
	});

	$scope.checkEmptyLength = function(temp){
		if(temp.length==0)return 0;
		else return 1;
	}	
});

App.controller('alumniDetails', function($scope, $http) {
	$scope.arr = [];
	$http.get('js/json/alumni.json')
	//$http.get('https://gist.githubusercontent.com/dsaket/41dfae4227fa42a748f3/raw/946ccae4a412c53153df277ecc6e2c95c637813c/todos_2.json')
	.then(function(res){
	  $scope.arr = res.data;
	  setTimeout(function(){
	  	$scope.initAlumni();
	  },500)		                
	});
	
	$scope.initAlumni= function(){
		//create the slider
		$('.cd-testimonials-wrapper').flexslider({
			selector: ".cd-testimonials > li",
			animation: "slide",
			controlNav: false,
			slideshow: true,
			smoothHeight: true,
			start: function(){
				$('.cd-testimonials').children('li').css({
					'opacity': 1,
					'position': 'relative'
				});
			}
		});
	}
});

App.controller('aboutDetails', function($scope, $http) {
	$scope.arr = [];
	$http.get('js/json/about.json')
	//$http.get('https://gist.githubusercontent.com/dsaket/a82149ed8a849b06873f/raw/2dc6dfeaeceb05224b8e19a6c646101c675fddc8/todos_3.json')
	.then(function(res){
	  $scope.arr = res.data;
	  setTimeout(function(){
	  	$scope.initAbout();
	  },500)                
	});

	$scope.initAbout= function(){
		var $timeline_block = $('.cd-timeline-block');

		//on scolling, show/animate timeline blocks when enter the viewport
		$(window).on('scroll', function(){
			$timeline_block.each(function(){
				if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
					$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
				}
			});
		});
	}
});

//home page transitions
App.controller('blogDetails', function($scope, $http) {
	$scope.arr = [];
	$http.get('js/json/blog.json')
	//$http.get('https://gist.githubusercontent.com/dsaket/911222558e2a057a6dc2/raw/7721cad83ebe6a43fe4bd7097e890049ae227280/todos4.json')
	.then(function(res){
	  $scope.arr = res.data;	                
	});

	$scope.showOverlay = false;
	$scope.temp = [];
	$scope.blogClicked= function(i){
		$("body").addClass("overflow-hide");
		$scope.showOverlay = !$scope.showOverlay;
		$scope.temp = i;
	}
	$scope.blogClosed= function(){
		$("body.overflow-hide").removeClass("overflow-hide");
		$scope.showOverlay = !$scope.showOverlay;
	}
});

App.controller('sponsorDetails', function($scope, $http) {
	$scope.arr = [];
	$http.get('js/json/sponsors.json')
	//$http.get('https://gist.githubusercontent.com/dsaket/caeef41e129aea9cbdd2/raw/f4d98bfe6ab92e839d6a6b72f223732961d267e2/todos5.json')
	.then(function(res){
	  $scope.arr = res.data;	                
	});
});
