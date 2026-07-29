import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Globe, Share2, CornerDownRight } from 'lucide-react';

const mockBlogs = {
  'scaling-react-apps': {
    title: 'Scaling React Architecture in 2026: Best Practices',
    category: 'Engineering',
    date: 'July 24, 2026',
    author: 'Suleman K.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
    content: [
      'As frontend codebases grow, scaling architecture becomes a primary concern for product engineering teams. Unstructured growth leads to code fragmentation, rendering performance degradation, and complex merge conflicts. In this comprehensive guide, we discuss patterns that keep code clean and developers efficient.',
      'One pattern that has proven extremely effective is Layout Segregation. By configuring wrapper routing modules that isolate the Global Navbar, footer, and scroll behaviors, we decouple standard shell logic from individual dynamic page views.',
      'Additionally, organizing sub-pages strictly within self-contained category directories (e.g. grouping Services pages separate from Industries vertical pages) prevents file-tree clutter. This modularization speeds up build compile times and simplifies dependency audits during scaling operations.'
    ]
  },
  'tailwind-v4-guide': {
    title: 'Migrating to Tailwind CSS v4: What You Need to Know',
    category: 'Design & CSS',
    date: 'July 18, 2026',
    author: 'Ali Hamza',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Tailwind CSS v4 introduces major architecture overhauls designed to maximize performance and simplify the development experience. Built on a brand-new lightning-fast compiler engine, v4 eliminates the necessity for a complex javascript-based config file, shifting properties directly into CSS layers.',
      'Using the new @theme directive, developers can seamlessly extend font-families, colors, border-radii, and animations in their standard input stylesheet. This reduces compilation overhead in build processes like Vite or Webpack.',
      'Moreover, utility variants like container configurations and base layer custom styles can be written in modular layers, reducing code churn and keeping bundles compact. We suggest adopting these practices early to future-proof your responsive layouts.'
    ]
  },
  'ai-features-saas': {
    title: 'Integrating AI Features in Your MVP: A Tactical Guide',
    category: 'Artificial Intelligence',
    date: 'July 12, 2026',
    author: 'Zainab B.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Every modern MVP now requests a layer of intelligence, whether it is standard LLM completions, interactive chatbots, or custom vector search models. However, building these from scratch can derail your time-to-market. The solution lies in lightweight orchestration.',
      'By designing clean API contracts that link specialized frontend components to micro-services, developers can load AI features asynchronously. Using framer-motion loaders and skeleton cards prevents layout shifts and provides smooth loading indicators while streams resolve.',
      'We also recommend isolating OpenAI or Anthropic API endpoints through middleware to protect secrets and monitor rate limits. This strategy guarantees a secure, reliable, and premium AI user experience without slowing down product delivery.'
    ]
  }
};

const BlogSingle = () => {
  const { id } = useParams();
  const blog = mockBlogs[id];

  if (!blog) {
    return (
      <div className="py-20 text-center space-y-6">
        <h2 className="text-2xl font-bold text-white">Article Not Found</h2>
        <p className="text-gray-400">The requested article could not be retrieved.</p>
        <Link to="/blog" className="inline-flex items-center space-x-2 text-brand-purple hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to blog list</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Back button */}
      <Link 
        to="/blog" 
        className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Insights</span>
      </Link>

      {/* Header Info */}
      <div className="space-y-6">
        <span className="bg-brand-purple/20 text-brand-purple border border-brand-purple/30 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
          {blog.category}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-brand-purple" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-brand-indigo" />
              <span>{blog.date}</span>
            </div>
          </div>
          
          <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
            <Share2 className="w-4 h-4" />
            <span>Share Article</span>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="aspect-video w-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/10">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-sans">
        {blog.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default BlogSingle;
