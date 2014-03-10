(function() {
    

    Bosonic.registerElement(
        'b-dropdown',
        {
    readyCallback: function () {
        var root = this.createShadowRoot();
        root.appendChild(this.template.content.cloneNode(true));
        this.querySelector('b-dropdown-toggle').addEventListener('click', function (e) {
            e.target.parentNode.classList.toggle('open');
        });
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
    template: '        <content></content>    '
}
    );
}());