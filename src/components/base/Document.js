import Component from '../../constructors/Component';

class Document extends Component {
  renderChildNode() {
    for (let i = 0; i < this.children.length; i += 1) {
      if (typeof this.children[i] === 'string') {
        this.root.doc.push(this.children[i]);
      } else if (typeof this.children[i] === 'object') {
        this.children[i].render();
      }
    }
  }

  render() {
    this.renderChildNode();
  }
}

export default Document;
