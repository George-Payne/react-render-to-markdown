import invariant from 'invariant';
import Component from '../../constructors/Component';

class Link extends Component{
    kind = 'inline';

    appendChild(child) {
        invariant(this.children.length === 0, 'Links Must only be passed a single as child');
        invariant(typeof child === 'string', 'Links Must only be a string as a child');

        super.appendChild(child);
    }

    _add = (txt) => {
        this.root.doc[this.root.doc.length - 1] += txt;
    }

    render() {
        this._add('[');
        this._add(this.children.length ? this.children[0] : this.props.to);
        this._add(']');
        this._add('(');
        this._add(this.props.href ? this.props.href : this.children[0])
        this._add(this.props.title ? ' "' + this.props.title + '"': '');
        this._add(')');
    }
}

export default Link;