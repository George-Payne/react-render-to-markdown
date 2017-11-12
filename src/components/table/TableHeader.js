import invariant from 'invariant';
import Component from '../../constructors/Component';

class TableHeader extends Component {
    kind = 'table';

    appendChild(child) {
        invariant(
            (
                child.constructor.name === 'TableCell'
            ),
            'TableHeader can only take TableCell'
        );

        super.appendChild(child);
    }
}

export default TableHeader;