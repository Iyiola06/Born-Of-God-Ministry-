const fs = require('fs');

let content = fs.readFileSync('components/library/BookGrid.tsx', 'utf8');

// Replace the mapping logic to ensure defaults
const replaceRegex = /<BookModal book=\{book\} \/>/;
const replacement = `<BookModal book={{
                  ...book,
                  cover: book.cover || 'https://picsum.photos/seed/placeholder/600/900',
                  language: book.language || 'English',
                  size: book.size || 'Unknown',
                  date: book.date || 'Unknown'
                }} />`;

content = content.replace(replaceRegex, replacement);
fs.writeFileSync('components/library/BookGrid.tsx', content);
console.log('BookGrid mapped successfully');
