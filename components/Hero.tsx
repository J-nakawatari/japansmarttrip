export default function Hero() {
  return (
    <div className="hero min-h-[400px] bg-gradient-to-br from-primary to-secondary text-primary-content">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Japan Journey, <span className="text-accent">Connected</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Expert guides on SIM cards, pocket WiFi, and JR Pass to keep you connected 
            throughout your amazing Japan adventure
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Articles</div>
                <div className="stat-value text-primary">50+</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Topics</div>
                <div className="stat-value text-secondary">3</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Updated</div>
                <div className="stat-value text-accent">2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}