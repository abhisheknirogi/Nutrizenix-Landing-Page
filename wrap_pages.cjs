const fs = require('fs');

const pages = [
  'src/pages/home.tsx',
  'src/pages/about.tsx',
  'src/pages/why_us.tsx',
  'src/pages/products.tsx',
  'src/pages/contact.tsx'
];

pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  if (!content.includes('PageTransition')) {
    content = content.replace(`import React`, `import React`);
    content = `import { PageTransition } from '../components/PageTransition';\n` + content;
    
    // Use regex to wrap the return statement
    // Simple enough strategy: look for 'return (' and replace, but need to find the final '  );'
    // Easier: wrap the default export if we exported a const, or replace 'return (' if it's simple.
    
    content = content.replace(/return \(/g, 'return (\n    <PageTransition>');
    // The closing tag is trickier. Let's just find the last export default and inject our wrapper.
    content = content.replace(/export default (.+);/, `const TransitionWrapper = () => <PageTransition><$1/></PageTransition>;\nexport default TransitionWrapper;`);
    // Need to avoid double wrapping if we use the top regex. 
    
    // Better way: simply find export default SomeName; and wrap the export
  }
});
