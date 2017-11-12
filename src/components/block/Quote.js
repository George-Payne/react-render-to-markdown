import Component from '../../constructors/Component';

class Quote extends Component {
    kind = 'block';

    renderChildren(pre) {
        for (let i = 0; i < this.children.length; i += 1) {
            if (typeof this.children[i] === 'string') {
                this.root.doc[this.root.doc.length - 1] += this.children[i].replace(/(\r\n|\n|\r)/gm, `\n${pre}`);
            } else {
                this.children[i].render(pre);
            }
        }
    }

    _shouldPred = (predicate) => {
        const prev = this.root.doc[this.root.doc.length - 1];

        return (prev !== predicate);
    }

    _shouldDrop = (predicate) => {
        const prev = this.root.doc[this.root.doc.length - 1] || '';

        return (prev.trim() && this._shouldPred(predicate));
    }

    render(predicate = '') {
        if (this._shouldDrop(predicate)) {
            this.root.doc.push(predicate);
        }
        if (this._shouldPred(predicate)) {
            this.root.doc.push(predicate);
        }
        this.root.doc[this.root.doc.length - 1] += '> ';
        this.renderChildren('> ' + predicate);
        this.root.doc.push(predicate);
    }
}

export default Quote;