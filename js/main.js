var MainObject = {
	selectors: {
		someObject: '.js-selector'
	},
	init: function () {

		// Cache parent object into local variable
		var self = this;

		// Cache all the JQuery objects into variables
		self.createObjects();

		// Bind events to the JQuery objects
		self.bindEvents();
	},
	createObjects: function () {
		var self = this;

		self.$JQueryObject = $(self.selectors.someObject);
	},
	bindEvents: function () {
		var self = this;

		self.$JQueryObject.on('click', function (e) {
			// Cache clicked link into local JQuery object
			var $targetObject = $(this);

			// Prevent clicked element default action 
			e.preventDefault();

			// Execute some function
			self.doSomething($targetObject);
		});
	},
	doSomething: function ($obj) {
		var self = this;

		console.log($obj);
	}
};

var PatternA = {
	selectors: {
		linkMenu: '.js-link-menu',
		section: '.js-section'
	},
	init: function () {

		// Cache parent object into local variable
		var self = this;

		// Cache all the JQuery objects into variables
		self.createObjects();

		// Bind events to the JQuery objects
		self.bindEvents();
	},
	createObjects: function () {
		var self = this;

		self.$linkMenu = $(self.selectors.linkMenu);
		self.$allSections = $(self.selectors.section);
	},
	bindEvents: function () {
		var self = this;

		self.$linkMenu.on('click', function (e) {

			// Cache clicked link into local JQuery object
			var $targetObject = $(this);

			// Prevent clicked element default action 
			e.preventDefault();

			// Pass the clicked element JQ object to functions
			self.highlightSection($targetObject);
			self.highlightMenu($targetObject);

		});
	},
	highlightSection: function ($obj) {
		var self = this;

		// Get corresponding section and cache it to local JQ object
		var $currentSection = $($obj.data('section'));

		// Remove active class from all the sections 
		self.$allSections.removeClass('active');

		// Activate current section
		$currentSection.addClass('active');

		// Scroll to section
		self.scrollToSection($currentSection);
	},
	highlightMenu: function ($obj) {
		var self = this;

		// Remove active class from all the menu links 
		self.$linkMenu.removeClass('active');

		// Activate current menu link
		$obj.addClass('active');
	},
	scrollToSection: function ($obj) {
		var self = this;

		// Get section offset
		var offsetTop = $obj.offset().top;

		// Scroll to section animation
		$('html, body').animate({
			scrollTop: offsetTop
		}, 500);

	}
};

var PatternB = {
	selectors: {
		image: '.js-image',
		section: '.js-section',
		actionlink: '.js-action-link'
	},
	init: function () {

		// Cache parent object into local variable
		var self = this;

		// Cache all the JQuery objects into variables
		self.createObjects();

		// Bind events to the JQuery objects
		self.bindEvents();
	},
	createObjects: function () {
		var self = this;

		self.$images = $(self.selectors.image);
		self.$actionLinks = $(self.selectors.actionlink);
	},
	bindEvents: function () {
		var self = this;

		self.$actionLinks.on('click', function (e) {

			// Cache clicked link into local JQuery object
			var $targetObject = $(this);

			// Prevent clicked element default action 
			e.preventDefault();

			// Pass the clicked element JQ object to functions
			self.toggleImages($targetObject);
			self.toggleLinks($targetObject);
		});
	},
	toggleImages: function ($obj) {
		var self = this;

		// Get corresponding parrent element
		var $parent = $obj.parents(self.selectors.section);

		// Get corresponding image element
		var $image = $parent.find(self.selectors.image);

		// Hide all images 
		self.$images.hide();

		// Show current image
		$image.show();
	},
	toggleLinks: function ($obj) {
		var self = this;

		// Show all links 
		self.$actionLinks.show();

		// Hide target link
		$obj.hide();
	}
};

var PatternC = {
	selectors: {
		section: '.js-section',
		classlink: '.js-class-link'
	},
	init: function () {

		// Cache parent object into local variable
		var self = this;

		// Cache all the JQuery objects into variables
		self.createObjects();

		// Bind events to the JQuery objects
		self.bindEvents();
	},
	createObjects: function () {
		var self = this;

		self.$classlink = $(self.selectors.classlink);
	},
	bindEvents: function () {
		var self = this;

		self.$classlink.on('click', function (e) {

			// Cache clicked link into local JQuery object
			var $targetObject = $(this);

			// Prevent clicked element default action 
			e.preventDefault();

			// Pass the clicked element JQ object to functions
			self.alterStates($targetObject);
		});
	},
	alterStates: function ($obj) {
		var self = this;

		// Get corresponding parrent element
		var $parent = $obj.parents(self.selectors.section);

		// Toggle class to the parent element
		$parent.toggleClass('alter');
	}
};

// Document ready
$(function () {

	// Init Main Object
	MainObject.init();

	// Init Pattern A
	PatternA.init();

	// Init Pattern B
	PatternB.init();

	// Init Pattern C
	PatternC.init();
});