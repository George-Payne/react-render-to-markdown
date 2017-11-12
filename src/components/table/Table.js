import invariant from 'invariant';
import Component from '../../constructors/Component';

class Table extends Component {
    kind = 'table';

    appendChild(child) {
        invariant(
            (
                child.constructor.name === 'TableHeader' ||
                child.constructor.name === 'TableRow'
            ),
            'Table can only take TableHeader or TableRow'
        );

        super.appendChild(child);
    }

    _add = (txt) => {
        this.root.doc[this.root.doc.length - 1] += txt;
    }

    _shouldPred = (predicate) => {
        const prev = this.root.doc[this.root.doc.length - 1];

        return (prev !== predicate);
    }

    _shouldDrop = (predicate) => {
        const prev = this.root.doc[this.root.doc.length - 1] || '';

        return (prev.trim() && this._shouldPred(predicate));
    }

    renderSubChildren(children, columns) {
        for (let i = 0; i < columns; i += 1) {
            this._add('|');

            if (children[i]) {
                children[i].render();
            } else {
                this._add('   ');
            }
        }

        this._add('|');
    }

    renderChildren(predicate) {
        const columns = Math.max(...this.children.map((child) => child.children.length));

        let i = 0;

        if (this.children[0] && this.children[0].constructor.name === 'TableHeader') {
            this.renderSubChildren(this.children[0].children, columns);
            i++;
        } else {
            for (let i = 0; i < columns; i += 1) {
                const child = this.children[0].children[i];

                this._add('|');
                this._add('   ');
            }

            this._add('|');
        }

        this.root.doc.push(predicate);

        for (let i = 0; i < columns; i += 1) {
            const child = this.children[0].children[i];

            this._add('|');

            if (child && child.props.textAlign === 'center') {
                this._add(':---:');
            } else if (child && child.props.textAlign === 'left') {
                this._add(':--- ');
            } else if (child && child.props.textAlign === 'right') {
                this._add(' ---:');
            } else {
                this._add(' --- ');
            }
        }

        this._add('|');

        for (; i < this.children.length; i += 1) {
            this.root.doc.push(predicate);

            this.renderSubChildren(this.children[i].children, columns);
        }
    }

    render(predicate = '', force = false) {
        if (!force && this._shouldDrop(predicate)) {
            this.root.doc.push(predicate);
        }
        if (!force && this._shouldPred(predicate)) {
            this.root.doc.push(predicate);
        }
        this.renderChildren(predicate);
        this.root.doc.push(predicate);
    }
}

export default Table;