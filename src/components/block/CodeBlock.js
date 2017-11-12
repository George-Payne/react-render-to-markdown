import invariant from 'invariant';
import Component from '../../constructors/Component';

class CodeBlock extends Component {
    kind = 'block';

    appendChild(child) {
        invariant(this.children.length === 0, 'Links Must only be passed a single as child');
        invariant(typeof child === 'string', 'Links Must only be a string as a child');

        super.appendChild(child);
    }

    renderChild(pre) {
        this.root.doc[this.root.doc.length - 1] += this.children[0].replace(/(\r\n|\n|\r)/gm, `\n${pre}`);
    }

    _shouldPred = (predicate) => {
        const prev = this.root.doc[this.root.doc.length - 1];

        return (prev !== predicate);
    }

    _shouldDrop = (predicate) => {
        const prev = this.root.doc[this.root.doc.length - 1] || '';

        return (prev.trim() && this._shouldPred(predicate));
    }

    render(predicate = '') {
        let pre = '';

        for (let i = 0; i < predicate.length; i++) {
            pre += ' ';
        }

        if (this._shouldDrop(predicate)) {
            this.root.doc.push(pre);
        }
        if (this._shouldPred(predicate)) {
            this.root.doc.push(pre);
        }
        this.root.doc[this.root.doc.length - 1] += `\`\`\` ${this.props.language || ''}`;
        this.root.doc.push(pre);
        this.renderChild(pre);
        this.root.doc.push(`${pre}\`\`\``);
        this.root.doc.push(pre);
    }
}

export default CodeBlock;