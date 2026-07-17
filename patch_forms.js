const fs = require('fs');

let content = fs.readFileSync('app/admin/page.tsx', 'utf8');

if (!content.includes('import { z } from "zod";')) {
  content = content.replace("import { supabase } from '@/lib/supabase';", "import { supabase } from '@/lib/supabase';\nimport { z } from 'zod';\nimport { useForm } from 'react-hook-form';\nimport { zodResolver } from '@hookform/resolvers/zod';");
}

// Add state for loading
if (!content.includes('const [isSubmitting, setIsSubmitting] = useState(false);')) {
  content = content.replace('const [searchQuery, setSearchQuery] = useState("");', 'const [searchQuery, setSearchQuery] = useState("");\n  const [isSubmitting, setIsSubmitting] = useState(false);');
}

// We will just patch the onSubmit handlers to add isSubmitting state and error handling
// Since using react-hook-form on 1600 lines is crazy complex via regex, we'll manually validate with Zod inside the handlers.

const sermonZod = `
const sermonSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  speaker: z.string().min(1, 'Speaker is required'),
  date: z.string().optional(),
  duration: z.string().optional(),
  youtubeId: z.string().min(11, 'Valid YouTube ID required')
});
`;
if (!content.includes('const sermonSchema = z.object')) {
  content = content.replace('export default function AdminDashboard() {', sermonZod + '\nexport default function AdminDashboard() {');
}

const addSermonRegex = /const addSermon = async \(e: React\.FormEvent\) => \{[\s\S]*?setIsSermonModalOpen\(false\);\n  \};/;
const newAddSermon = `const addSermon = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const added = {
        title: newSermon.title,
        speaker: newSermon.speaker,
        date: newSermon.date || new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        duration: newSermon.duration || '45 mins',
        youtubeId: newSermon.youtubeId
      };
      
      // Zod Validation
      const validated = sermonSchema.parse(added);
      
      const { data, error } = await supabase.from('sermons').insert(validated).select('*').single();
      
      if (error) throw error;
      
      setSermons([data, ...sermons]);
      setNewSermon({ title: '', speaker: 'Apostle John Doe', date: '', duration: '', youtubeId: '' });
      setIsSermonModalOpen(false);
      alert('Sermon saved successfully!');
    } catch (err: any) {
      console.error(err);
      if (err.errors) {
        alert('Validation Error: ' + err.errors.map((e: any) => e.message).join(', '));
      } else {
        alert('Error saving sermon: ' + err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };`;
content = content.replace(addSermonRegex, newAddSermon);

const bookZod = `
const bookSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  category: z.string(),
  pages: z.number(),
  downloads: z.string(),
  format: z.string(),
  description: z.string()
});
`;
if (!content.includes('const bookSchema = z.object')) {
  content = content.replace('export default function AdminDashboard() {', bookZod + '\nexport default function AdminDashboard() {');
}

const addBookRegex = /const addBook = async \(e: React\.FormEvent\) => \{[\s\S]*?setIsBookModalOpen\(false\);\n  \};/;
const newAddBook = `const addBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const added = {
        id: \`b\${Date.now()}\`,
        title: newBook.title,
        author: newBook.author,
        category: newBook.category,
        pages: Number(newBook.pages) || 100,
        downloads: '0',
        format: newBook.format,
        description: newBook.description || 'No description provided.'
      };
      
      const validated = bookSchema.parse(added);
      
      const { data, error } = await supabase.from('books').insert(validated).select('*').single();
      if (error) throw error;
      
      setBooks([data, ...books]);
      setNewBook({ title: '', author: '', category: 'Discipleship', pages: 150, downloads: '0', format: 'PDF', description: '' });
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

// Patch button states
content = content.replace(/<Button type="submit" className="bg-brand text-brand-charcoal hover:bg-brand-light font-bold">Save Broadcast<\/Button>/g, '<Button type="submit" disabled={isSubmitting} className="bg-brand text-brand-charcoal hover:bg-brand-light font-bold">{isSubmitting ? "Saving..." : "Save Broadcast"}</Button>');
content = content.replace(/<Button type="submit" className="bg-brand text-brand-charcoal hover:bg-brand-light font-bold">Upload Resource<\/Button>/g, '<Button type="submit" disabled={isSubmitting} className="bg-brand text-brand-charcoal hover:bg-brand-light font-bold">{isSubmitting ? "Uploading..." : "Upload Resource"}</Button>');

fs.writeFileSync('app/admin/page.tsx', content);
console.log('Forms patched successfully');
