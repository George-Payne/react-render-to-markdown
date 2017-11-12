import invariant from 'invariant';
import Component from '../../constructors/Component';

class TableCell extends Component {
    kind = 'table';

    appendChild(child) {
        invariant(
            (
                child.kind === 'inline' || typeof child === 'string'
            ),
            'Table can only take strings or inline elements'
        );

        super.appendChild(child);
    }

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
        this.renderChildren();
    }
}

export default TableCell;