import React from 'react';
import { Frame } from './common';
import { Image, Notebook as Robot, Glasses } from 'lucide-react';

const features = [
  {
    icon: Image,
    title: "Image & Video Generation",
    description: "Virtual Try-Ons and autonomous video production, redefining how brands connect with their audience.",
    points: [
      "Real-time virtual try-ons",
      "Instant video generation",
      "Personalized content",
      "Brand storytelling"
    ],
    image: "https://i.imgur.com/deP2RSc.jpg"
  },
  {
    icon: Robot,
    title: "Robotics with Personality",
    description: "Robots that learn, adapt, and respond like true collaborators, bringing life to automation.",
    points: [
      "Behavioral AI",
      "Synthetic training",
      "Brand voice integration",
      "Adaptive learning"
    ],
    image: "https://i.imgur.com/AJULKFH.jpg"
  },
  {
    icon: Glasses,
    title: "AR/VR with AI",
    description: "Step into AI-powered worlds that adapt to you, from showrooms to training simulations.",
    points: [
      "Adaptive environments",
      "Gesture controls",
      "Context awareness",
      "Reality blending"
    ],
    image: "https://i.imgur.com/5Hxcoe0.jpg"
  }
];

export default function Overview() {
  return (
    <div className="px-4 md:px-6" id="overview">
      <div className="max-w-5xl mx-auto">
        <Frame 
          title="WHAT'S NEXT" 
          description="Discover the technologies we're developing to transform industries."
        >
          <div className="space-y-12 md:space-y-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-none space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-[#928466]/10 border border-[#928466]/30 flex items-center justify-center group-hover:border-[#928466] transition-colors duration-300">
                          <Icon size={24} className="text-[#928466]" />
                        </div>
                        <h3 className="text-xl md:text-2xl text-[#928466] tracking-wider">{feature.title}</h3>
                      </div>
                      
                      <p className="text-white/60 leading-relaxed">{feature.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {feature.points.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/40">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#928466]/40" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="order-1 lg:order-none">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-[#928466]/20" />
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {index < features.length - 1 && (
                    <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#928466]/30 to-transparent mt-12 md:mt-16" />
                  )}
                </div>
              );
            })}
          </div>
        </Frame>
      </div>
    </div>
  );
}