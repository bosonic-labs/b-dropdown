(function() {
    

    Bosonic.registerElement(
        'b-dropdown',
        {
    readyCallback: function () {
        this.appendChild(this.template.content.cloneNode(true));
        this.querySelector('b-dropdown-toggle').addEventListener('click', function (e) {
            e.target.parentNode.classList.toggle('open');
        });
    },
    addItem: function (node) {
        var item = document.createElement('b-dropdown-item');
        if (typeof node === 'string') {
            item.innerText = node;
        } else {
            item.appendChild(node);
        }
        this.querySelector('b-dropdown-menu').appendChild(item);
    },
    template: '    '
}
    );
}());