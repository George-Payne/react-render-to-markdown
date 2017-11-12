import Component from '../../constructors/Component';

class HorizontalRule extends Component {
    kind = 'block';

    appendChild(child) {
        invariant(true, 'HorizontalRule cannot take any children');
    }

    render(predicate = '') {
        this.root.doc.push(predicate);
        this.root.doc.push(predicate + '---');
        this.root.doc.push(predicate);
    }
}

export default HorizontalRule;