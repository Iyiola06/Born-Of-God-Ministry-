const fs = require('fs');

let content = fs.readFileSync('app/admin/page.tsx', 'utf8');

// Add supabase import
if (!content.includes("import { supabase } from '@/lib/supabase'")) {
    content = content.replace("import { motion } from 'motion/react';", "import { motion } from 'motion/react';\nimport { supabase } from '@/lib/supabase';");
}

// Replace useEffect
const effectStartRegex = /\/\/ --- Initial Hydration and local storage synchronization ---\s*useEffect\(\(\) => \{[\s\S]*?    setSystemMetrics\(\{ cpu: 14, memory: 42, latency: 28 \}\);\n  \}, \[\]\);/;

const newEffect = `// --- Initial Hydration from Supabase ---
  useEffect(() => {
    async function fetchData() {
      // Load Sermons
      const { data: sData } = await supabase.from('sermons').select('*').order('created_at', { ascending: false });
      if (sData) setSermons(sData);

      // Load Books
      const { data: bData } = await supabase.from('books').select('*').order('created_at', { ascending: false });
      if (bData) setBooks(bData);

      // Load Prayers
      const { data: pData } = await supabase.from('prayers').select('*').order('created_at', { ascending: false });
      if (pData && pData.length > 0) {
        setPrayers(pData);
      } else {
        // Fallback or seed
        setPrayers([
          { id: 'p1', name: 'Grace Wambui', request: 'Healing from chronic joint pains in left leg.', date: 'July 14, 2026', status: 'Pending', branch: 'Nairobi Global HQ' },
          { id: 'p2', name: 'Samuel Harris', request: 'Provision for children tuition fees for the incoming term.', date: 'July 13, 2026', status: 'Answered', branch: 'New York Hope Assembly' }
        ]);
      }

      // Load Branches
      const { data: brData } = await supabase.from('branches').select('*').order('created_at', { ascending: false });
      if (brData && brData.length > 0) {
        setBranches(brData);
      } else {
        setBranches([
          { id: 'br1', name: 'Nairobi Global HQ', location: 'Nairobi, Kenya', pastor: 'Apostle John Doe', members: 4200 },
          { id: 'br2', name: 'London Covenant Branch', location: 'London, UK', pastor: 'Pastor Elizabeth Taylor', members: 620 }
        ]);
      }
      
      setSystemMetrics({ cpu: 14, memory: 42, latency: 28 });
    }
    fetchData();
  }, []);`;

content = content.replace(effectStartRegex, newEffect);

// Replace syncSermons / syncBooks (just remove them or make them empty since we use Supabase)
content = content.replace(/const syncSermons = \([\s\S]*?\};\n/, '');
content = content.replace(/const syncBooks = \([\s\S]*?\};\n/, '');

// Replace addSermon
const addSermonRegex = /const addSermon = \(e: React\.FormEvent\) => \{[\s\S]*?status: 'success'\n    \}, \.\.\.prev\]\);\n  \};/;
const newAddSermon = `const addSermon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSermon.title || !newSermon.youtubeId) return;
    
    const added = {
      title: newSermon.title,
      speaker: newSermon.speaker,
      date: newSermon.date || new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      duration: newSermon.duration || '45 mins',
      youtubeId: newSermon.youtubeId
    };
    
    const { data, error } = await supabase.from('sermons').insert(added).select('*').single();
    
    if (error) {
      console.error(error);
      return;
    }
    
    setSermons([data, ...sermons]);
    setNewSermon({ title: '', speaker: 'Apostle John Doe', date: '', duration: '', youtubeId: '' });
    setIsSermonModalOpen(false);
  };`;
content = content.replace(addSermonRegex, newAddSermon);

// Replace deleteSermon
const deleteSermonRegex = /const deleteSermon = \(id: number\) => \{[\s\S]*?status: 'warning'\n    \}, \.\.\.prev\]\);\n  \};/;
const newDeleteSermon = `const deleteSermon = async (id: number) => {
    const { error } = await supabase.from('sermons').delete().eq('id', id);
    if (!error) {
      setSermons(sermons.filter(s => s.id !== id));
    }
  };`;
content = content.replace(deleteSermonRegex, newDeleteSermon);

// Replace addBook
const addBookRegex = /const addBook = \(e: React\.FormEvent\) => \{[\s\S]*?status: 'success'\n    \}, \.\.\.prev\]\);\n  \};/;
const newAddBook = `const addBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return;
    
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
    
    const { data, error } = await supabase.from('books').insert(added).select('*').single();
    if (error) {
      console.error(error);
      return;
    }
    
    setBooks([data, ...books]);
    setNewBook({ title: '', author: '', category: 'Discipleship', pages: 150, downloads: '0', format: 'PDF', description: '' });
    setIsBookModalOpen(false);
  };`;
content = content.replace(addBookRegex, newAddBook);

// Replace deleteBook
const deleteBookRegex = /const deleteBook = \(id: string\) => \{[\s\S]*?status: 'warning'\n    \}, \.\.\.prev\]\);\n  \};/;
const newDeleteBook = `const deleteBook = async (id: string) => {
    const { error } = await supabase.from('books').delete().eq('id', id);
    if (!error) {
      setBooks(books.filter(b => b.id !== id));
    }
  };`;
content = content.replace(deleteBookRegex, newDeleteBook);

fs.writeFileSync('app/admin/page.tsx', content);
console.log('Admin page patched successfully');
