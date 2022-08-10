export { tabs, tabList, tabPanel };
class tabList extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const bmoContent = this.innerHTML;
        this.innerHTML =
            '<ul class="tab-list">' +

            '</ul>';
        const tabList = this.querySelector('.tab-list');
        // const tabGuideLine = this.querySelector('.tablist-guideline');
        var appendTablist = document.createElement("span");
        appendTablist.innerHTML = '<span class="tablist-guideline" aria-hidden="true"></span>';
        // const tabsContent = this.querySelector('.alert-notification .alert-message-wrap div:first-of-type');
        tabList.parentNode.classList.add('bmo-tabs-wrap');
        tabList.parentNode.setAttribute('id', 'bmo-tabs-wrap');
        tabList.setAttribute('role', 'tablist');
        tabList.setAttribute('aria-label', 'Use right and left arrows to navigate between tabs');
        tabList.innerHTML = bmoContent;
    }
}
customElements.define('tab-list', tabList);

class tabs extends HTMLElement {
    constructor() {
        super();

    }
    get tabText() { return this.getAttribute('label'); }
    set tabText(value) {
        if (value) {
            this.setAttribute('label', value);
        }
    }
    get activeTab() { return this.getAttribute('active'); }
    set activeTab(value) {
        if (value) {
            this.setAttribute('active', value);
        }
    }

    static get observedAttributes() {
        return ['active'];
    }
    connectedCallback() {
        this.innerHTML =
            '<span class="tab-indicator"></span>';
        const tab = this.querySelector('.tab-indicator');
        tab.parentNode.classList.add('tab');
        tab.parentNode.setAttribute('role', 'tab');
        tab.parentNode.setAttribute('tabindex', '-1');
        tab.parentNode.textContent = this.tabText;
        let createSpan = document.createElement("span");
        createSpan.classList.add('tab-indicator');
        this.appendChild(createSpan);
        if (this.hasAttribute('active')) {
            this.classList.add(this.active);
            this.setAttribute('tabindex', '0');
        }
        //Create Unique ID for each tab
        var tabsIndex = 0;
        var allTabs = document.querySelectorAll('.tab');

        [].forEach.call(allTabs, function(allTab) {
            tabsIndex++;
            allTab.setAttribute('id', 'tab-' + tabsIndex)
            allTab.setAttribute('aria-controls', 'tab-' + tabsIndex + '-panel');

        });
        const navTabsRight = (r) => {
            this.nextElementSibling.focus();
        }
        const navTabsLeft = (l) => {
            this.previousElementSibling.focus();
        }
        const toggleTabs = (e) => {
            const thisTab = this.querySelector('.tab');
            this.setAttribute('active', '');
            this.focus();
            this.setAttribute('tabindex', '0');
            const tabID = (this.id);
            document.querySelector('#' + this.id + '-panel').setAttribute('active', '');
            var tabWrapWidth = document.querySelector('.bmo-tabs-wrap');
            const tabs = document.querySelectorAll('.tab');
            const tabWidth = [].slice.call(tabs);
            var amountForTabsToMove = this.offsetLeft - Math.abs(tabWrapWidth.offsetWidth - this.offsetWidth) / 2;
            tabWrapWidth.scrollLeft = amountForTabsToMove;
        }
        setTimeout(() => {
            this.addEventListener('click', function() {
                toggleTabs();
            });
            this.addEventListener('keypress', function() {
                let downArrow = event.keyCode;
                switch (downArrow) {
                    case 13:
                        toggleTabs();
                        break;
                    default:
                        break;
                }
            });
            this.addEventListener('keydown', function(e) {
                var key = e.keyCode || e.which;
                switch (key) {
                    case 39:
                        e.preventDefault();
                        navTabsRight();
                        break;
                    case 37:
                        e.preventDefault();
                        navTabsLeft();
                        break;
                }
            });
        }, 100);


    }

    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
        if (attr === 'active') {
            var allTabs = document.querySelectorAll('.tab');
            [].forEach.call(allTabs, function(allTab) {
                allTab.removeAttribute('tabindex');
                allTab.classList.remove('active-tab-label');
                allTab.setAttribute('tabindex', '-1');
                allTab.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active-tab-label');
            this.setAttribute('aria-selected', 'true');
        }

    }
}
customElements.define('bmo-tab', tabs);

class tabPanel extends HTMLElement {
    constructor() {
        super();

    }
    get activePanel() { return this.getAttribute('active'); }
    set activePanel(value) {
        if (value) {
            this.setAttribute('active', value);

        }
    }
    connectedCallback() {
        const panelContent = this.innerHTML;
        this.innerHTML =
            '<div class="panel-content">' +
            '</div';

        const tabPanel = this.querySelector('.panel-content');
        // const tabsPanelContent = this.querySelector('.panel-content:first-of-type');
        tabPanel.parentNode.classList.add('tab-panel');
        tabPanel.parentNode.setAttribute('role', 'tabpanel');
        tabPanel.innerHTML = panelContent;
        if (this.hasAttribute('active')) {
            //  const tab = this.querySelector('.tab-panel');
            // tabPanel.parentNode.classList.add('active-tab-content');

        }
        //Create Unique ID for each panel
        var panelsIndex = 0;
        var allPanels = document.querySelectorAll('.tab-panel');
        [].forEach.call(allPanels, function(allPanel) {
            panelsIndex++;
            allPanel.setAttribute('id', 'tab-' + panelsIndex + '-panel')
            allPanel.setAttribute('aria-describedby', 'tab-' + panelsIndex)
        });
    }
    static get observedAttributes() {
        return ['active'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('Attribute changed:', attr, oldVal, newVal);
        if (attr === 'active') {
            var allTabsPanels = document.querySelectorAll('tab-panel');
            [].forEach.call(allTabsPanels, function(allTabsPanel) {
                allTabsPanel.removeAttribute('tabindex');
                allTabsPanel.removeAttribute('active');
                allTabsPanel.classList.remove('active-tab-content');
            });
            this.setAttribute('aria-selected', 'true');
            this.classList.add('active-tab-content');
            this.setAttribute('aria-hidden', 'false');

        }

    }
}
customElements.define('tab-panel', tabPanel);