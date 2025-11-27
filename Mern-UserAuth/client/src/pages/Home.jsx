import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const Home = () => {
  return (
    <div className='relative w-full flex items-center justify-center'>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-medium text-emerald-700">
            Welcome to my app!
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Build something
          <br />
          <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            extraordinary
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your ideas into reality with our powerful platform. Join
          thousands of creators building the next generation of products.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all shadow-md hover:shadow-lg border border-slate-200">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            {
              value: '50K+',
              label: 'Active Users',
            },
            {
              value: '100K+',
              label: 'Projects Created',
            },
            {
              value: '99.9%',
              label: 'Uptime',
            },
            {
              value: '24/7',
              label: 'Support',
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  )
}

export default Home
