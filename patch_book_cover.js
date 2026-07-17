const fs = require('fs');

let content = fs.readFileSync('app/admin/page.tsx', 'utf8');

// Add storage import
if (!content.includes('import { uploadFile } from "@/lib/supabase/storage";')) {
  content = content.replace("import { supabase } from '@/lib/supabase';", "import { supabase } from '@/lib/supabase';\nimport { uploadFile } from '@/lib/supabase/storage';");
}

// Add state for file
if (!content.includes('const [coverFile, setCoverFile] = useState<File | null>(null);')) {
  content = content.replace('const [newBook, setNewBook] = useState', 'const [coverFile, setCoverFile] = useState<File | null>(null);\n  const [newBook, setNewBook] = useState');
}

// Update addBook
const addBookRegex = /const addBook = async \(e: React\.FormEvent\) => \{[\s\S]*?setIsSubmitting\(false\);\n    \}\n  \};/;
const newAddBook = `const addBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let coverUrl = '';
      if (coverFile) {
        const path = \`books/\${Date.now()}-\${coverFile.name}\`;
        const uploaded = await uploadFile('media', path, coverFile);
        if (uploaded) coverUrl = uploaded;
      }
      
      const added = {
        id: \`b\${Date.now()}\`,
        title: newBook.title,
        author: newBook.author,
        category: newBook.category,
        pages: Number(newBook.pages) || 100,
        downloads: '0',
        format: newBook.format,
        description: newBook.description || 'No description provided.',
        cover: coverUrl
      };
      
      const validated = bookSchema.parse(added);
      
      const { data, error } = await supabase.from('books').insert(validated).select('*').single();
      if (error) throw error;
      
      setBooks([data, ...books]);
      setNewBook({ title: '', author: '', category: 'Discipleship', pages: 150, downloads: '0', format: 'PDF', description: '' });
      setCoverFile(null);
      setIsBookModalOpen(false);
      alert('Book saved successfully!');
    } catch (err: any) {
      console.error(err);
      if (err.errors) {
        alert('Validation Error: ' + err.errors.map((e: any) => e.message).join(', '));
      } else {
        alert('Error saving book: ' + err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };`;
content = content.replace(addBookRegex, newAddBook);

// Add file input to form
const formCategoryRegex = /<div>\s*<label className="block text-xs font-bold uppercase mb-2">Category<\/label>[\s\S]*?<\/div>/;
const fileInputStr = `<div>
    <label className="block text-xs font-bold uppercase mb-2">Category</label>
    <input
      type="text"
      value={newBook.category}
      onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
      className="w-full bg-gray-100 dark:bg-white/5 border border-transparent rounded-2xl px-4 py-3 text-sm focus:outline-none"
    />
  </div>
  <div>
    <label className="block text-xs font-bold uppercase mb-2">Cover Image (Optional)</label>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
      className="w-full bg-gray-100 dark:bg-white/5 border border-transparent rounded-2xl px-4 py-2 text-sm focus:outline-none"
    />
  </div>`;
content = content.replace(formCategoryRegex, fileInputStr);

fs.writeFileSync('app/admin/page.tsx', content);
console.log('Book Cover upload patched successfully');
