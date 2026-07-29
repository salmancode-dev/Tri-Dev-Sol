import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle, Sparkles, Binary, Cpu } from 'lucide-react';

const AiIntegration = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Header */}
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-2">
          <Brain className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          AI Feature <br />
          <span className="bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent">
            Integration
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Enhance your SaaS application with OpenAI, Anthropic, or custom machine learning pipelines. We build chat systems, summary tools, and recommendations engine integrations.
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Smart Product Engineering</h2>
          <p className="text-gray-400 leading-relaxed">
            AI is no longer a luxury—it is becoming a standard feature. We assist companies in adding intelligent prompts, setting up vector searches using Pinecone or pgvector, and developing automated agents that handle redundant office operations securely.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <h4 className="font-bold text-white">Prompt Design</h4>
              <p className="text-xs text-gray-400">Context modeling, system rules tuning, and semantic parsing systems.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Binary className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Vector Embedding</h4>
              <p className="text-xs text-gray-400">Transform raw documents and datasets into searchable vector embeddings.</p>
            </div>
          </div>
        </div>

        {/* Benefits Sidebar */}
        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">AI Capabilities</h3>
          <ul className="space-y-4">
            {[
              'LLM text completion wrappers',
              'Custom RAG database setups',
              'Pinecone & pgvector deployment',
              'AI content generator panels',
              'Automated summarizers',
              'Streaming response UI loaders'
            ].map((benefit, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-white/5">
            <Link
              to="/contact"
              className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-amber-500 to-red-500 text-white font-bold rounded-xl text-sm"
            >
              Request AI Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiIntegration;
