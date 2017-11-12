import {
  Document,
  MdDocument,

  H1,
  H2,
  H3,
  H4,
  H5,
  H6,

  Paragraph,
  CodeBlock,
  Quote,
  HorizontalRule,

  Emphasis,
  Strong,
  StrikeThrough,
  InlineCode,
  Link,
  Image,

  ListItem,
  OrderedList,
  UnorderedList,

  Table,
  TableHeader,
  TableRow,
  TableCell,
} from '../components/';

let ROOT_NODE_INSTANCE = null

function getHostContextNode(rootNode) {
  if (typeof rootNode !== undefined) {
    return ROOT_NODE_INSTANCE = rootNode
  } else {
    console.warn(`${rootNode} is not an instance of officegen docx constructor.`)

    return ROOT_NODE_INSTANCE = new MdDocument()
  }
}

// Creates an element with an element type, props and a root instance
function createElement(type, props) {
  const COMPONENTS = {
    ROOT: () => new MdDocument(),
    Document: () => new Document(ROOT_NODE_INSTANCE, props),

    H1: () => new H1(ROOT_NODE_INSTANCE, props),
    H2: () => new H2(ROOT_NODE_INSTANCE, props),
    H3: () => new H3(ROOT_NODE_INSTANCE, props),
    H4: () => new H4(ROOT_NODE_INSTANCE, props),
    H5: () => new H5(ROOT_NODE_INSTANCE, props),
    H6: () => new H6(ROOT_NODE_INSTANCE, props),
    Paragraph: () => new Paragraph(ROOT_NODE_INSTANCE, props),
    CodeBlock: () => new CodeBlock(ROOT_NODE_INSTANCE, props),
    Quote: () => new Quote(ROOT_NODE_INSTANCE, props),
    HorizontalRule: () => new HorizontalRule(ROOT_NODE_INSTANCE, props),

    Emphasis: () => new Emphasis(ROOT_NODE_INSTANCE, props),
    Strong: () => new Strong(ROOT_NODE_INSTANCE, props),
    StrikeThrough: () => new StrikeThrough(ROOT_NODE_INSTANCE, props),
    InlineCode: () => new InlineCode(ROOT_NODE_INSTANCE, props),
    Link: () => new Link(ROOT_NODE_INSTANCE, props),
    Image: () => new Image(ROOT_NODE_INSTANCE, props),

    ListItem: () => new ListItem(ROOT_NODE_INSTANCE, props),
    OrderedList: () => new OrderedList(ROOT_NODE_INSTANCE, props),
    UnorderedList: () => new UnorderedList(ROOT_NODE_INSTANCE, props),

    Table: () => new Table(ROOT_NODE_INSTANCE, props),
    TableHeader: () => new TableHeader(ROOT_NODE_INSTANCE, props),
    TableRow: () => new TableRow(ROOT_NODE_INSTANCE, props),
    TableCell: () => new TableCell(ROOT_NODE_INSTANCE, props),

    default: undefined,
  };

  return COMPONENTS[type]() || COMPONENTS.default;
}

export {
  createElement,
  getHostContextNode,
}
