
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Sector
} from 'recharts';

// Data for charts
const hicomData = [
  { name: 'M1', sessions: 100 }, { name: 'M2', sessions: 120 }, { name: 'M3', sessions: 140 },
  { name: 'M4', sessions: 180 }, { name: 'M5', sessions: 220 }, { name: 'M6', sessions: 248 },
];
const btclubData = [{ name: 'ROAS', Before: 1.0, After: 4.5 }];
const hikalpaaData = [{ name: 'Achieved', value: 100 }, { name: 'Target', value: 60 }];
const footwearData = [
    { name: 'Q1', roas: 2.0 }, { name: 'Q2', roas: 3.2 }, { name: 'Q3', roas: 4.5 }
];
const COLORS = ['#3CC61A', '#5A99FC'];

const CaseStudyCard: React.FC<{
    title: string;
    subtitle: string;
    imageUrl: string;
    stats: { value: string; label: string }[];
    chart: React.ReactNode;
    description: string;
    link: string;
    linkText: string;
    imageFirst?: boolean;
}> = ({ title, subtitle, imageUrl, stats, chart, description, link, linkText, imageFirst = false }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, 0.2);

    const imageSection = (
        <div className='relative h-64 lg:h-full min-h-[250px]'>
            <img src={imageUrl} alt={`${title} Case Study`} className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
            <div className='absolute bottom-6 left-6 right-6'>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-1'>{title}</h3>
                <p className='text-white/90 text-sm'>{subtitle}</p>
            </div>
        </div>
    );
    const contentSection = (
        <div className='p-6 lg:p-8'>
            <h4 className='text-lg font-bold mb-3 text-[#1a202c]'>Key Results</h4>
            <div className='grid grid-cols-3 gap-3 mb-4'>
                {stats.map(stat => (
                    <div key={stat.label} className='text-center'>
                        <div className='text-2xl font-black gradient-text'>{stat.value}</div>
                        <div className='text-xs text-gray-600 mt-1'>{stat.label}</div>
                    </div>
                ))}
            </div>
            <div className='relative w-full h-40 mb-4'>{chart}</div>
            <p className='text-sm text-gray-700 mb-3 leading-relaxed'>{description}</p>
            <a href={link} target='_blank' rel='noopener noreferrer' className='inline-block text-[#5A99FC] font-semibold hover:underline text-base focus:outline-none focus:ring-2 focus:ring-[#5A99FC] focus:ring-offset-2 rounded px-1 py-1'>
                {linkText} →
            </a>
        </div>
    );

    return (
        <div ref={ref} className={`glass-card rounded-3xl overflow-hidden mb-8 reveal ${isVisible ? 'active' : ''}`}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                {imageFirst ? <>{imageSection}{contentSection}</> : <>{contentSection}{imageSection}</>}
            </div>
        </div>
    );
};


const Portfolio: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section id='portfolio' className='relative py-12 sm:py-16 md:py-20'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className={`text-center mb-10 md:mb-12 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black mb-3'>
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Showcasing our best projects that drive real results
          </p>
        </div>

        <CaseStudyCard
          title="Hicom India"
          subtitle="Industrial Supplier - SEO & Lead Generation"
          imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop"
          stats={[ { value: '+148%', label: 'Organic Sessions' }, { value: '+92%', label: 'Qualified Leads' }, { value: '↑ 11.3', label: 'Avg Position' }]}
          chart={
            <ResponsiveContainer>
              <LineChart data={hicomData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip wrapperClassName="glass-card !border-none !p-2" />
                <Line type="monotone" dataKey="sessions" stroke="#5A99FC" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          }
          description="Complete SEO overhaul with technical optimization, content strategy, and lead flow revamp resulting in significant organic growth."
          link="https://www.hicomindia.com/" linkText="View Case Study"
          imageFirst={true}
        />
        
        <CaseStudyCard
          title="TheBTclub"
          subtitle="D2C Apparel - Performance Marketing"
          imageUrl="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&auto=format&fit=crop"
          stats={[{ value: '3x', label: 'Sales Growth' }, { value: '4.5x', label: 'ROAS' }, { value: '-5%', label: 'RTO Rate' }]}
          chart={
            <ResponsiveContainer>
              <BarChart data={btclubData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)"/>
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip wrapperClassName="glass-card !border-none !p-2" />
                <Bar dataKey="Before" fill="#5A99FC" radius={[4, 4, 0, 0]} />
                <Bar dataKey="After" fill="#3CC61A" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          }
          description="Account restructuring, creative testing flywheel, and funnel optimization leading to marked efficiency and profitability gains."
          link="#contact" linkText="Start Similar Project"
          imageFirst={false}
        />

        <CaseStudyCard
          title="HiKalpaa"
          subtitle="Preschool - Lead Optimization"
          imageUrl="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&auto=format&fit=crop"
          stats={[{ value: '100%', label: 'Target Met' }, { value: '3x', label: 'Footfall' }, { value: '+78%', label: 'Lead Quality' }]}
          chart={
            <ResponsiveContainer>
              <PieChart>
                <Pie data={hikalpaaData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#8884d8" dataKey="value" paddingAngle={5}>
                  {hikalpaaData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip wrapperClassName="glass-card !border-none !p-2" />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          }
          description="Automated lead qualification flow, targeted campaigns, and enhanced user journey helping achieve 100% admissions target."
          link="https://www.hikalpaa.org/" linkText="View Website"
          imageFirst={true}
        />

        <CaseStudyCard
          title="D2C Footwear Brand"
          subtitle="E-commerce - Paid Media Optimization"
          imageUrl="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&auto=format&fit=crop"
          stats={[{ value: '4.5x', label: 'ROAS' }, { value: '+2.5%', label: 'CVR' }, { value: '+25%', label: 'AOV' }]}
          chart={
            <ResponsiveContainer>
                <LineChart data={footwearData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip wrapperClassName="glass-card !border-none !p-2" />
                    <Line type="monotone" dataKey="roas" stroke="#3CC61A" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
          }
          description="Paid media strategy optimization, landing page A/B testing, and product bundling resulting in significant ROAS improvement."
          link="#contact"
          linkText="Get Similar Results"
          imageFirst={false}
        />
      </div>
    </section>
  );
};

export default Portfolio;
