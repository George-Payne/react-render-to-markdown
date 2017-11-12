import Component from './Component';

const inline = (ident) => class extends Component {
    kind = 'inline';

    _add = (txt) => {
        this.root.doc[this.root.doc.length - 1] += txt;
    }

    renderChildren() {
        for (let i = 0; i < this.children.length; i += 1) {
            if (typeof this.children[i] === 'string') {
                this._add(this.children[i]);
            } else {
                this.children[i].render();
            }
        }
    }

    render() {
        this._add(ident);

        this.renderChildren();

        this._add(ident);
    }
}

export default inline;