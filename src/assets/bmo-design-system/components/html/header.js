setTimeout(function() {
	var headr = document.querySelector('header');
	var profileBtn = headr.querySelector('button.profile-menu-button');
	var profileMenu = profileBtn.nextElementSibling;
	var overlay = document.querySelector('.bmo-overlay-light');
	var navBtns = headr.querySelectorAll('.primary-nav li a.primary-link');
	var navBtnsGeneric = headr.querySelectorAll('.primary-nav li a');
	var subNavContainer = headr.querySelectorAll('.sub-nav-container');
	var subNavLinks = headr.querySelectorAll('.sub-nav-container ul.sub-nav li a');

	navBtnsGeneric = Array.prototype.slice.call(navBtnsGeneric);
	subNavContainer = Array.prototype.slice.call(subNavContainer);

	profileBtn.addEventListener('click', function () {
		profileMenu.classList.toggle('active');

		var overlayVisibility = overlay.style.display;
		overlay.style.display = (overlayVisibility === 'block') ? 'none' : 'block';

		this.setAttribute('aria-expanded', (function() {
			var exp = this.getAttribute('aria-expanded');
			return exp === 'true' ? 'false' : 'true'
		}.bind(this))());
	});

	overlay.addEventListener('click', function () {
		overlay.style.display = 'none';
		profileMenu.classList.remove('active');
		profileBtn.setAttribute('aria-expanded', 'false');
	});

	navBtns = Array.prototype.slice.call(navBtns);
	navBtns.forEach(function(nb) {
		nb.addEventListener('click', function () {
			navBtnsGeneric.forEach(function(btn) {
				btn.classList.remove('active');
				btn.setAttribute('aria-expanded', 'false');
				return false;
			});
			subNavContainer.forEach(function(nav) {
				nav.classList.remove('expanded');
			});
			this.classList.toggle('active');

			// expandable
			if (this.classList.contains('expandable')) {
				this.nextElementSibling.classList.add('expanded');
				this.setAttribute('aria-expanded', 'true');
				
			}
		});
	});

	subNavLinks = Array.prototype.slice.call(subNavLinks);
	subNavLinks.forEach(function(link) {
		link.addEventListener('click', function () {
			subNavLinks.forEach(function(lk) {
				lk.classList.remove('active');
			});
			this.classList.toggle('active');
		});
	});

	// MOBILE NAV SCRIPTS
	var mbl = {};
	mbl.burgerBtn = headr.querySelector('nav.mobile-task-bar ul li a.mobile-menu-button');
	mbl.menu = headr.querySelector('.mobile-nav-list.first-drawer');
	mbl.menu2 = headr.querySelector('ul.mobile-nav-list.second-drawer');

	mbl.expandables = headr.querySelectorAll('nav.mobile-task-bar ul li ul li a.mobile-menu-expandable');
	mbl.backBtn = headr.querySelector('nav.mobile-task-bar ul li ul li ul li a.drawer-header-back');

	mbl.burgerBtn.addEventListener('click', function () {
		[this, mbl.menu].forEach(function(z) {
			z.classList.toggle('active');
		});
		mbl.menu2.classList.remove('active');
	});

	mbl.expandables = Array.prototype.slice.call(mbl.expandables);
	mbl.expandables.forEach(function(exp) {
		exp.addEventListener('click', function () {
			this.nextElementSibling.classList.add('active');
		});
	});
	mbl.backBtn.addEventListener('click', function() {
		this.closest('ul.mobile-nav-list.second-drawer').classList.remove('active');
	});

	// USER SETTINGS MENU
	mbl.userMenuBtn = headr.querySelector('.user-menu-trigger');
	mbl.userMenu = headr.querySelector('.user-setting-menu');
	mbl.userMenuBack = headr.querySelector('.user-setting-menu-header-back');

	mbl.userMenuBtn.addEventListener('click', mobileMenuToggle);
	mbl.userMenuBack.addEventListener('click', mobileMenuToggle);

	function mobileMenuToggle() {
		mbl.userMenu.classList.toggle('active');
		var expanded = this.getAttribute('aria-expanded');
		this.setAttribute('aria-expanded', (function() {
			return (expanded === 'true') ? 'false' : 'true';
		})());
	}
}, 0);