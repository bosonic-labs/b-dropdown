(function () {
    function isChildOf(node, possibleParent) {
        var isChildren = false;
        while (node && !isChildren) {
            isChildren = node === possibleParent;
            node = node.parentNode;
        }
        return isChildren;
    }
    var BDropdownPrototype = Object.create(HTMLElement.prototype, {
            open: {
                enumerable: true,
                get: function () {
                    return this.hasAttribute('open');
                }
            },
            createdCallback: {
                enumerable: true,
                value: function () {
                    this.initialized = false;
                    if (this.isUnderDocument()) {
                        this.init();
                    }
                }
            },
            attachedCallback: {
                enumerable: true,
                value: function () {
                    if (!this.initialized) {
                        this.init();
                    }
                }
            },
            init: {
                enumerable: true,
                value: function () {
                    this.clickOutsideListener = this.clickOutside.bind(this);
                    if (this.id) {
                        var toggle = document.querySelector('[data-b-dropdown-toggle=\'' + this.id + '\']');
                        if (toggle) {
                            var that = this;
                            toggle.addEventListener('click', function (e) {
                                e.stopPropagation();
                                that.toggle();
                            }, false);
                        }
                    }
                    this.initialized = true;
                }
            },
            toggle: {
                enumerable: true,
                value: function () {
                    this.open ? this.hide() : this.show();
                }
            },
            show: {
                enumerable: true,
                value: function () {
                    this.setAttribute('open', '');
                    document.addEventListener('click', this.clickOutsideListener);
                }
            },
            hide: {
                enumerable: true,
                value: function () {
                    this.removeAttribute('open');
                    document.removeEventListener('click', this.clickOutsideListener);
                }
            },
            clickOutside: {
                enumerable: true,
                value: function (e) {
                    if (!isChildOf(e.target, this)) {
                        this.hide();
                    }
                }
            },
            isUnderDocument: {
                enumerable: true,
                value: function (domElement) {
                    return domElement !== undefined && (domElement === document || isUnderDocument(domElement.parentNode));
                }
            }
        });
    window.BDropdown = document.registerElement('b-dropdown', { prototype: BDropdownPrototype });
}());