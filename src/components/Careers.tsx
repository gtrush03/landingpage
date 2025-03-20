import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Briefcase, MapPin, Clock, DollarSign, Users, ChevronRight,
  Brain, Code, Target, Shield, Network, GitBranch, MessageSquare, Bot,
  Sparkles, Workflow, Database, Cpu
} from 'lucide-react';
import Footer from './Footer';

// Detailed job listings data
const positions = [
  {
    id: 'technical-project-manager',
    title: "Technical Project Manager",
    type: "Development",
    location: "Remote",
    salary: "$100,000 - $120,000",
    level: "Manager",
    description: `We are on the lookout for an experienced Technical Manager to join and lead one of our Agents-as-a-Service development teams. This role is pivotal in bridging the gap between our esteemed clients and our dedicated developers. Your primary responsibilities will include managing client communications, scoping agentic projects, overseeing project management, and providing valuable feedback to our team.`,
    responsibilities: [
      "Act as the primary communication liaison between clients and the development team",
      "Scope and define tasks and deliverables in close collaboration with clients",
      "Oversee the project management process to ensure timely delivery and quality standards",
      "Provide constructive feedback and guidance to our development team",
      "Engage in technical discussions with clients and provide expert opinions on AI Agents",
      "Ensure availability for project meetings and sales calls in various time zones"
    ],
    technicalSkills: [
      "Proficiency in Python, with a stronger emphasis on backend development",
      "Experience developing reliable AI agents using modern frameworks",
      "Strong understanding of modern AI technologies (OpenAI API, Langchain, etc.)",
      "Familiarity with Vector Databases and AI infrastructure"
    ],
    softSkills: [
      "Exceptional communication skills",
      "Ability to convey complex technical concepts to non-technical stakeholders",
      "Excellent organizational and multitasking abilities",
      "Leadership and team management experience"
    ],
    tags: ["Project Management", "AI Agents", "DevOps"]
  },
  {
    id: 'ai-agent-developer',
    title: "AI Agent Developer",
    type: "Development",
    location: "Remote",
    salary: "$40,000 - $60,000",
    level: "Junior/Intern",
    description: `Join us in building the future of autonomous business systems. As an AI Agent Developer, you'll work on cutting-edge AI technologies, developing intelligent agents that transform how businesses operate. This is a unique opportunity to shape the future of work while growing your expertise in AI and autonomous systems.`,
    responsibilities: [
      "Develop and maintain AI agents using modern frameworks and best practices",
      "Implement and optimize machine learning models for specific business use cases",
      "Collaborate with the team on architecture and design decisions",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and technical discussions",
      "Stay current with the latest AI technologies and industry trends"
    ],
    technicalSkills: [
      "Strong foundation in Python programming",
      "Understanding of machine learning concepts",
      "Familiarity with AI frameworks (PyTorch, TensorFlow, etc.)",
      "Experience with version control systems (Git)",
      "Knowledge of RESTful APIs and microservices"
    ],
    softSkills: [
      "Strong problem-solving abilities",
      "Eagerness to learn and adapt to new technologies",
      "Good communication skills",
      "Ability to work independently and in a team"
    ],
    tags: ["Python", "Machine Learning", "AI Development"]
  },
  {
    id: 'technical-ai-product-manager',
    title: "Technical AI Product Manager",
    type: "Product",
    location: "Remote",
    salary: "$120,000+",
    level: "Senior",
    description: `We're seeking an experienced Technical AI Product Manager to drive the vision and execution of our AI agent products. In this role, you'll work at the intersection of business strategy and technical implementation, ensuring our AI solutions deliver maximum value to our clients while pushing the boundaries of what's possible with autonomous systems.`,
    responsibilities: [
      "Define and execute product strategy for our AI agent platform",
      "Work with clients to understand their needs and translate them into technical requirements",
      "Collaborate with engineering teams to ensure successful product delivery",
      "Drive product innovation and maintain competitive advantage",
      "Manage the product roadmap and prioritize features",
      "Monitor product performance and gather user feedback"
    ],
    technicalSkills: [
      "Strong understanding of AI/ML technologies and trends",
      "Experience with AI product development and deployment",
      "Familiarity with cloud platforms and infrastructure",
      "Knowledge of software development lifecycle",
      "Data analysis and metrics tracking expertise"
    ],
    softSkills: [
      "Strategic thinking and business acumen",
      "Excellent communication and presentation skills",
      "Strong leadership and stakeholder management",
      "Problem-solving and analytical abilities"
    ],
    tags: ["Product Management", "AI Strategy", "Technical Leadership"]
  },
  {
    id: 'backend-developer',
    title: "Backend Developer",
    type: "Development",
    location: "Remote",
    salary: "$60,000 - $80,000",
    level: "Mid-Level",
    description: `Join our team as a Backend Developer and help build the infrastructure that powers our AI agents. You'll work on developing robust, scalable systems that enable our AI agents to operate efficiently and reliably across various business environments.`,
    responsibilities: [
      "Design and implement scalable backend services",
      "Develop APIs for AI agent integration",
      "Optimize system performance and reliability",
      "Implement security best practices",
      "Write automated tests and documentation",
      "Collaborate with the AI team on agent infrastructure"
    ],
    technicalSkills: [
      "Strong experience with Python and Node.js",
      "Knowledge of databases (SQL and NoSQL)",
      "Experience with RESTful APIs and GraphQL",
      "Understanding of cloud services (AWS/GCP/Azure)",
      "Familiarity with containerization and orchestration"
    ],
    softSkills: [
      "Problem-solving mindset",
      "Good communication skills",
      "Team collaboration",
      "Attention to detail"
    ],
    tags: ["Backend Development", "API Design", "Cloud Infrastructure"]
  },
  {
    id: 'sales-executive',
    title: "Sales Executive",
    type: "Sales",
    location: "Remote",
    salary: "$60,000 - $100,000 + Commission",
    level: "Mid-Senior",
    description: `We're looking for a dynamic Sales Executive to help drive the adoption of our AI agent solutions. In this role, you'll work with businesses to understand their needs and demonstrate how our AI technology can transform their operations.`,
    responsibilities: [
      "Generate and qualify new business opportunities",
      "Conduct product demonstrations and technical presentations",
      "Develop and maintain relationships with key clients",
      "Work with technical teams to understand client requirements",
      "Meet and exceed sales targets",
      "Maintain accurate sales pipeline and forecasting"
    ],
    technicalSkills: [
      "Understanding of AI and automation technologies",
      "Experience with CRM systems",
      "Proficiency in sales tools and platforms",
      "Basic technical knowledge to discuss AI solutions"
    ],
    softSkills: [
      "Excellent communication and presentation skills",
      "Strong negotiation abilities",
      "Strategic thinking and problem-solving",
      "Self-motivated and results-driven"
    ],
    tags: ["Sales", "Business Development", "AI Solutions"]
  }
];

// Job Card Component
const JobCard = ({ job, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-black/40 border border-[#928466]/20 rounded-lg overflow-hidden backdrop-blur-sm hover:border-[#928466]/40 transition-all duration-300">
      {/* Header Section */}
      <div className="p-6 border-b border-[#928466]/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl text-[#928466] tracking-wider mb-2">{job.title}</h3>
            <div className="flex flex-wrap items-center gap-3 text-white/60">
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-[#928466]" />
                <span className="text-sm">{job.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#928466]" />
                <span className="text-sm">{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={16} className="text-[#928466]" />
                <span className="text-sm">{job.salary}</span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center gap-2 px-6 py-2 bg-[#928466]/10 rounded-lg hover:bg-[#928466]/20 transition-colors duration-300 group"
          >
            <span className="text-[#928466] text-sm">
              {isExpanded ? 'Show Less' : 'View Details'}
            </span>
            <ChevronRight 
              size={16} 
              className={`text-[#928466] transform transition-transform duration-300 ${
                isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-[#928466]/10 border border-[#928466]/20 rounded-full text-[#928466] text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Expanded Content */}
      <div className={`
        overflow-hidden transition-all duration-500 ease-in-out
        ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'}
      `}>
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-lg text-white mb-3">Job Description</h4>
            <p className="text-white/60 leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="text-lg text-white mb-3">Key Responsibilities</h4>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-2 text-white/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#928466] mt-2" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-lg text-white mb-3">Technical Skills</h4>
            <ul className="space-y-2">
              {job.technicalSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2 text-white/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#928466] mt-2" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h4 className="text-lg text-white mb-3">Soft Skills</h4>
            <ul className="space-y-2">
              {job.softSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2 text-white/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#928466] mt-2" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <div className="pt-4">
            <button 
              onClick={onClick}
              className="w-full group relative overflow-hidden flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#928466] to-[#B7A98B] rounded-lg hover:scale-105 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#928466] to-[#B7A98B] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
              <span className="relative text-black font-medium">Apply Now</span>
              <ChevronRight size={18} className="relative text-black transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Careers() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApply = (jobId) => {
    // TODO: Implement application process
    console.log('Applying for job:', jobId);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-50 border-b border-[#928466]/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#928466] hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="text-sm tracking-wider">Back to Dashboard</span>
          </button>
        </div>
        {/* Progress bar */}
        <div className="relative h-0.5 bg-[#928466]/20">
          <div 
            className="absolute top-0 left-0 h-full bg-[#928466] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Main content */}
      <div className="relative pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-thin tracking-[0.3em] text-[#928466] mb-6">
              CAREERS
            </h1>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#928466] to-transparent mb-6" />
            <p className="text-xl text-white/60 tracking-wider max-w-2xl mx-auto">
              Join Us in Building the Future of Business Intelligence
            </p>
          </div>

          {/* Company Overview */}
          <div className="mb-16">
            <div className="bg-black/40 border border-[#928466]/20 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl text-[#928466] tracking-wider mb-6">About Our Company</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We are at the forefront of the AI revolution, providing bespoke AI agent solutions 
                that empower businesses to thrive in this transformative era. Our team is composed 
                of passionate innovators and problem solvers dedicated to delivering cutting-edge 
                technology solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-[#928466]/10 rounded-lg border border-[#928466]/20">
                  <h3 className="text-[#928466] mb-2 flex items-center gap-2">
                    <Brain size={20} />
                    <span>Innovation First</span>
                  </h3>
                  <p className="text-white/60 text-sm">
                    Work on cutting-edge AI technology that shapes the future of business
                  </p>
                </div>
                <div className="p-4 bg-[#928466]/10 rounded-lg border border-[#928466]/20">
                  <h3 className="text-[#928466] mb-2 flex items-center gap-2">
                    <Users size={20} />
                    <span>Remote Culture</span>
                  </h3>
                  <p className="text-white/60 text-sm">
                    Flexible work environment with a focus on results and collaboration
                  </p>
                </div>
                <div className="p-4 bg-[#928466]/10 rounded-lg border border-[#928466]/20">
                  <h3 className="text-[#928466] mb-2 flex items-center gap-2">
                    <Target size={20} />
                    <span>Growth Focus</span>
                  </h3>
                  <p className="text-white/60 text-sm">
                    Continuous learning and career development opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="space-y-8">
            <h2 className="text-2xl text-[#928466] tracking-wider mb-8">Open Positions</h2>
            
            <div className="space-y-6">
              {positions.map((position) => (
                <JobCard 
                  key={position.id} 
                  job={position}
                  onClick={() => handleApply(position.id)}
                />
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-16 text-center">
            <p className="text-white/40 text-sm italic">
              We appreciate every application received. These positions will remain active until filled, 
              and we are committed to reviewing each application thoroughly.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}