function ScrollFireManager() {
	var _self = this;
	this.options = [];
	
	this.renameULs = function() {
		var experienceULClassName = "experience-ul";

		$("." + experienceULClassName).each(function(index) {
    		var indexedClassName = experienceULClassName + index;
    		$(this).addClass(indexedClassName).removeClass(experienceULClassName);
    		_self.addStaggeredListScrollFireOptionBySelector("." + indexedClassName);
		});

	};

	this.addStaggeredListScrollFireOptionBySelector = function(selector) {
		console.log();
		var option = {
			selector: selector,
			offset: 200,
			callback: 'Materialize.showStaggeredList("' + selector + '")'
		};
		this.options.push(option);
	}

	this.addParallaxScrollFireOptions = function() {
		this.options.push({
			selector: '#education', 
			offset: 0, 
			callback: 'toggleHoverTextBySelector(".parallax-googlejump")'
		});
		this.options.push({
			selector: '#experience', 
			offset: 0, 
			callback: 'toggleHoverTextBySelector(".parallax-internhacks")'
		});
	};


	this.initScrollFire = function() {
		this.renameULs();
		this.addParallaxScrollFireOptions();
    	Materialize.scrollFire(this.options);
	};

};
