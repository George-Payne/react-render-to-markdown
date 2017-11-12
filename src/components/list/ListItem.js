import invariant from 'invariant';
import Component from '../../constructors/Component';

class ListItem extends Component {
    kind = 'list';

    renderChildren(predicate) {
        let pre = '';

        for (let i = 0; i < predicate.length; i++) {
            pre += ' ';
        }

        for (let i = 0; i < this.children.length; i += 1) {
            if (typeof this.children[i] === 'string') {
                this.root.doc[this.root.doc.length - 1] += this.children[i];
            } else if (this.children[i].kind === 'table') {
                this.children[i].render(pre, true);
            } else {
                this.children[i].render(pre);
            }
        }
    }

    render(predicate) {
        this.root.doc.push(predicate);
        this.renderChildren(predicate);
    }
}

export default ListItem;