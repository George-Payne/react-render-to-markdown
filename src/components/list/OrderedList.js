import invariant from 'invariant';
import Component from '../../constructors/Component';

class OrderedList extends Component {
    kind = 'list';

    appendChild(child) {
        invariant(
            child.constructor.name === 'ListItem',
            'OrderedList can only take ListItems'
        );

        super.appendChild(child);
    }

    children = [];

    renderChildren(pre) {
        for (let i = 0; i < this.children.length; i += 1) {
            this.children[i].render(`${pre}${i+1}. `);
        }
    }

    render(predicate = '') {
        this.renderChildren(predicate);

        if (!predicate) {
            this.root.doc.push('');
            this.root.doc.push('');
        }
    }
}

export default OrderedList;