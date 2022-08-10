(function() {
	var tabSets = document.querySelectorAll('.bmo-tabs-wrap');

	[].forEach.call(tabSets, function(tabContainer) {
		// var tabContainer = document.querySelector('.bmo-tabs-wrap');
		var tabs = tabContainer.querySelectorAll('li');
		var tabPanels = tabContainer.parentElement.querySelectorAll('.tab-panel');

		tabs = [].slice.call(tabs);
		tabPanels = [].slice.call(tabPanels);

		var tabEvents = {
			'keydown': function(e) {
				var key = e.keyCode || e.which;

				switch (key) {
					case 39:
						e.preventDefault();
						(function() {
							var focused = tabContainer.querySelector('li:focus');
							if (focused.nextElementSibling) focused.nextElementSibling.focus();
						})();
						break;
					case 37:
						e.preventDefault();
						(function() {
							var focused = tabContainer.querySelector('li:focus');
							if (focused.previousElementSibling) focused.previousElementSibling.focus();
						})();
						break;
				}
			},
			'clickKeyup': function(e) {
				if (e.type === 'keyup' && e.keyCode !== 13) return false;

				var target = e.target;

				//UPDATE TABLIST ATTRIBUTES AND CLASSES
				tabs.forEach(function(t) {
					t.classList.remove('active-tab-label');
					t.setAttribute('aria-selected', 'false');
					t.setAttribute('tabindex', '-1');
				});

				target.classList.add('active-tab-label');
				target.setAttribute('aria-selected', 'true');
				target.setAttribute('tabindex', '0');

				mobileTabScroll(target, tabContainer);

				// set & display active tab content
				var currentPanel = tabContainer.parentElement.querySelector('#' + target.id + '-panel');

				// arias, tabindexes, active class
				tabs.forEach(function(t) {
					t.setAttribute('aria-selected', 'false');
				});

				tabPanels.forEach(function(p) {
					p.classList.remove('active-tab-content');
					p.setAttribute('aria-hidden', 'true');
					p.setAttribute('tabindex', '-1');
				});

				target.setAttribute('aria-selected', 'true');
				currentPanel.classList.add('active-tab-content');
				currentPanel.setAttribute('aria-hidden', 'false');
				currentPanel.setAttribute('tabindex', '0');
			}
		};

		tabs.forEach(function(t) {
			// change visible tab on click or Enter
			t.addEventListener('click', tabEvents.clickKeyup);
			t.addEventListener('keyup', tabEvents.clickKeyup);
			t.addEventListener('keydown', tabEvents.keydown);
		});
	});

	// scroll to selected tab in list
	function mobileTabScroll(target, container) {
		var r = target.offsetLeft - Math.abs(container.offsetWidth - target.offsetWidth) / 2;
		container.scrollLeft = r;
	}
})();
