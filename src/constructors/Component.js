class Component {
    children = [];

    constructor(root, props) {
        this.root = root;
        this.props = props;
    }

    appendChild(child) {
        this.children.push(child);
    }

    removeChild(child) {
        const index = this.children.indexOf(child);
        this.children.slice(index, 1);
    }
}

export default Component;
