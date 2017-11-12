import invariant from 'invariant';
import Component from '../../constructors/Component';

class Image extends Component {
    kind = 'inline';

    appendChild(child) {
        invariant(true, 'Image cannot take any children');
    }

    _add = (txt) => {
        this.root.doc[this.root.doc.length - 1] += txt;
    }

    render() {
        this._add('![');
        this._add(this.props.alt || ' ');
        this._add(']');
        this._add('(');
        this._add(this.props.src)
        this._add(this.props.title ? ' "' + this.props.title + '"' : '');
        this._add(')');
    }
}

export default Image;