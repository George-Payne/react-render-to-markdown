import React, { Component } from 'react';

import {
    render,
    Document,
    H1,
    H2,
    Strong,
    Emphasis,
    StrikeThrough,
    Link,
    Paragraph,
    ListItem,
    OrderedList,
    UnorderedList,
    Image,
    InlineCode,
    CodeBlock,
    Quote,
    HorizontalRule,
    Table,
    TableHeader,
    TableRow,
    TableCell,
} from './src';

const Section = ({ title, children }) => (
    <Paragraph>
        <H2>{title}</H2>
        <Paragraph>
            { children }
        </Paragraph>
    </Paragraph>
);

class App extends Component {
    render() {
        return (
            <Document>
                <H1>
                    {'React render to markdown'}
                </H1>
                <Quote>{'Write markdown with React'}</Quote>
                <Section title={'Introduction'}>
                    {'This renderer allows you to write react and have it render out to a markdown file.'}
                </Section>
                <Section title={'Why'}>
                    {'Markdown felt like good target for my first renderer:'}
                    <UnorderedList>
                        <ListItem>{'Only need to work with strings'}</ListItem>
                        <ListItem>{'Limited API'}</ListItem>
                    </UnorderedList>
                </Section>
                <Section title={'Running The project'}>
                    <CodeBlock language={'bash'}>
{`
git clone https://github.com/George-Payne/react-render-to-markdown
cd react-render-to-markdown
yarn install
yarn example
`}
                    </CodeBlock>
                    {'This will create this readme. Edit '} <InlineCode>{'demo.js'}</InlineCode> {' to edit the readme.'}
                </Section>
                <Section title={'Acknowledgements'}>
                    <Paragraph>
                        {'Written following '}
                        <Link
                            title={'😎'}
                            href={'https://github.com/nitin42/Making-a-custom-React-renderer'}
                        >
                            {'nitin42\'s Building a custom React renderer'}
                        </Link>
                        {'.'}
                    </Paragraph>
                    <Paragraph>
                        {'Heavily referenced '}
                        <Link
                            href={'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet'}
                        >
                            {'Adam Pritchard\'s Markdown Cheatsheet'}
                        </Link>
                        {'.'}
                    </Paragraph>
                </Section>
            </Document>
        );
    }
}


render(<App />, `${__dirname}/README.md`)
    .catch(console.error);