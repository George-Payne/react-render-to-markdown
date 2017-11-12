import Component from '../../constructors/Component';

const header = (ident) => class extends Component {
    kind = 'block';

    renderChildren(pre) {
        for (let i = 0; i < this.children.length; i += 1) {
            if (typeof this.children[i] === 'string') {
                this.root.doc[this.root.doc.length - 1] += this.children[i];
            } else {
                this.children[i].render(pre);
            }
        }
    }

    render(predicate = '') {
        this.root.doc.push(ident ? `${ident} ` : '');
        this.renderChildren(predicate);
        this.root.doc.push(predicate);
    }
}

export const H1 = header('#');
export const H2 = header('##');
export const H3 = header('###');
export const H4 = header('####');
export const H5 = header('#####');
export const H6 = header('######');
