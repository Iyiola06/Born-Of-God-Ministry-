const fs = require('fs');

let content = fs.readFileSync('app/admin/page.tsx', 'utf8');

const loginRegex = /const handleLoginSubmit = \(e: React\.FormEvent\) => \{[\s\S]*?setAuditLogs\(prev => \[newLog, \.\.\.prev\]\);\n  \};/;
const newLogin = `const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });
    
    if (error) {
      alert('Login failed: ' + error.message);
      return;
    }
    
    setIsAuthenticated(true);
    setActiveUser({
      name: data.user?.email || 'Admin User',
      email: data.user?.email || '',
      role: 'Super Administrator',
      avatarLetter: (data.user?.email?.[0] || 'A').toUpperCase()
    });
  };`;

content = content.replace(loginRegex, newLogin);

const logoutRegex = /const handleLogout = \(\) => \{\n    setIsAuthenticated\(false\);\n  \};/;
const newLogout = `const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };`;
content = content.replace(logoutRegex, newLogout);

// also add a check on mount to see if user is authenticated
const effectRegex = /async function fetchData\(\) \{/;
const newEffect = `async function fetchData() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
        setActiveUser({
          name: session.user.email || 'Admin User',
          email: session.user.email || '',
          role: 'Super Administrator',
          avatarLetter: (session.user.email?.[0] || 'A').toUpperCase()
        });
      }
`;
content = content.replace(effectRegex, newEffect);

fs.writeFileSync('app/admin/page.tsx', content);
console.log('Auth patched successfully');
