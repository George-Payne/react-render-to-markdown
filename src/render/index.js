import fs from 'fs';
import path from 'path';
import { createElement } from '../utils/createElement';
import MdRenderer from '../reconciler/';
import parse from '../parse/';

// Renders the input component
async function render(element, filePath) {
  // Create root container instance
  const container = createElement('ROOT');

  // Returns the current fiber (flushed fiber)
  const node = MdRenderer.createContainer(container);

  // Schedules a top level update with current fiber and a priority level (depending upon the context)
  MdRenderer.updateContainer(element, node, null);

  MdRenderer.injectIntoDevTools({
    bundleType: 1,
    version: '0.1.0',
    rendererPackageName: 'markdown-renderer',
    findHostInstanceByFiber: MdRenderer.findHostInstance
  })

  // Parse the input component and return the output
  const output = parse(container).toBuffer();

  // Officegen generates a output stream and not a file
  const stream = fs.createWriteStream(filePath);

  await new Promise((resolve, reject) => {
    // Generate a word document
    fs.writeFile(filePath, output.doc.join('\n'), finish(filePath, resolve, reject));
  });
}

const finish = (filePath, resolve, reject) => (err) => {
  if (err) {
    console.error(err);
    reject();
  } else {
    console.log(`:) md document created at ${path.resolve(filePath)}.`);
    resolve();
  }
}

export default render;
