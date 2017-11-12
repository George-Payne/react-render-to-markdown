import invariant from 'invariant';
import Component from '../../constructors/Component';

class TableRow extends Component {
    kind = 'table';

    appendChild(child) {
        invariant(
            (
                child.constructor.name === 'TableCell'
            ),
            'TableRow can only take TableCell'
        );

        super.appendChild(child);
    }
}

export default TableRow;