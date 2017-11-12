import Component from '../../constructors/Component';

class Paragraph extends Component {
    kind = 'block';

    renderChildren() {
        for (let i = 0; i < this.children.length; i += 1) {
            if (typeof this.children[i] === 'string') {
                this.root.doc[this.root.doc.length - 1] += this.children[i];
            } else {
                this.children[i].render();
            }
        }
    }

    _shouldPred = (predicate) => {
        const prev = this.root.doc[this.root.doc.length - 2];

        return (prev !== predicate);
    }

    _shouldDrop = (predicate) => {
        const prev = this.root.doc[this.root.doc.length - 1] || '';

        return !!prev.trim().length;
    }

    render(predicate = '') {
        if (this._shouldDrop(predicate)) {
            this.root.doc.push(predicate);
        }
        if (this._shouldPred(predicate)) {
            this.root.doc.push(predicate);
        }
        this.renderChildren(predicate);
        this.root.doc.push(predicate);
    }
}

export default Paragraph;