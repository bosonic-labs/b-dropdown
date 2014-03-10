(function() {
    

    Bosonic.registerElement(
        'b-dropdown',
        {
    readyCallback: function () {
        var root = this.createShadowRoot();
        root.appendChild(this.template.content.cloneNode(true));
        var toggleTitle = root.querySelector('p.b-dropdown-toggle');
        toggleTitle.textContent = this.getAttribute('title');
        toggleTitle.addEventListener('click', function (e) {
            this.classList.toggle('open');
        }.bind(this));
    },
    addItem: function (node) {
        var item = document.createElement('li');
        if (typeof node === 'string') {
            item.innerText = node;
        } else {
            item.appendChild(node);
        }
        this.querySelector('ul').appendChild(item);
    },
    template: '        <p class="b-dropdown-toggle"></p>        <content></content>    '
}
    );
}());