export default function Hero() {
  return (
    <div className="hero min-h-[600px] relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/hero-image.jpg" 
          alt="Japan travel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>
      <div className="hero-content text-center py-24 relative z-10 text-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Japan Sim Trip
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light">
            Your complete guide to staying connected in Japan with SIM cards, pocket WiFi, and JR Pass
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-0 shadow-xl">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
              SIM Cards Guide
            </button>
            <button className="btn btn-lg bg-white text-secondary hover:bg-gray-100 border-0 shadow-xl">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              Pocket WiFi
            </button>
            <button className="btn btn-lg bg-white text-accent hover:bg-gray-100 border-0 shadow-xl">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              JR Pass Info
            </button>
          </div>
          <div className="stats bg-white/90 backdrop-blur shadow-xl">
            <div className="stat">
              <div className="stat-value">50+</div>
              <div className="stat-desc">Articles</div>
            </div>
            <div className="stat">
              <div className="stat-value">24/7</div>
              <div className="stat-desc">Support</div>
            </div>
            <div className="stat">
              <div className="stat-value">2025</div>
              <div className="stat-desc">Updated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}