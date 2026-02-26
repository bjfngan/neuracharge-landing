
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://edgecom.ai/wp-content/uploads/2025/06/Untitled-design-1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-slate-900/50 z-10"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <main className="relative z-30 flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white/90">Vertical EMS</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            NeuraCharge™
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            Turn DERs into profit with intelligent, automated Distributed Energy Resource Management
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-medium group transition-all duration-300 hover:scale-105 shadow-lg text-white border border-[#0966C9] hover:border-[#074a9e]"
              style={{ backgroundColor: '#0966C9' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#074a9e';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0966C9';
              }}
              onClick={() => window.open('https://portal.edgecom.ai/', '_blank')}
            >
              Access Portal
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
