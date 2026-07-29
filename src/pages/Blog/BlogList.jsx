import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const mockBlogs = [
  {
    id: 'scaling-react-apps',
    title: 'Scaling React Architecture in 2026: Best Practices',
    excerpt: 'Explore structural patterns, component lifecycles, state boundaries, and routing logic for large-scale enterprise React apps.',
    category: 'Engineering',
    date: 'July 24, 2026',
    author: 'Suleman K.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tailwind-v4-guide',
    title: 'Migrating to Tailwind CSS v4: What You Need to Know',
    excerpt: 'Tailwind v4 is here with compile-time improvements, a CSS-first configuration, and new theme layers. Let\'s look at how to structure your projects.',
    category: 'Design & CSS',
    date: 'July 18, 2026',
    author: 'Ali Hamza',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ai-features-saas',
    title: 'Integrating AI Features in Your MVP: A Tactical Guide',
    excerpt: 'How to combine LLM wrappers, vector databases, and system prompts to ship intelligence features without bloating development timelines.',
    category: 'Artificial Intelligence',
    date: 'July 12, 2026',
    author: 'Zainab B.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80'
  }
];

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Engineering', 'Design & CSS', 'Artificial Intelligence'];

  const filteredBlogs = mockBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === 'All' || blog.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Insights & <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">News</span>
        </h1>
        <p className="text-gray-400">
          Articles, guides, and engineering updates from the TriDevSol development team.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-white/5 pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                selectedCat === cat 
                  ? 'bg-brand-purple text-white' 
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none focus:border-brand-purple transition-colors"
            placeholder="Search articles..."
          />
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, idx) => (
          <article 
            key={idx}
            className="bg-dark-card border border-white/5 hover:border-white/15 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="h-52 overflow-hidden bg-zinc-900 relative">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-brand-purple/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                {blog.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{blog.author}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-brand-purple transition-colors line-clamp-2">
                  <Link to={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h3>
                
                <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              <Link
                to={`/blog/${blog.id}`}
                className="inline-flex items-center space-x-2 text-sm text-brand-purple hover:text-white font-bold transition-colors group/btn"
              >
                <span>Read article</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
