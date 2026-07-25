import "../styles/hero.css";
function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">
                <h1>AP ECET Preparation Portal</h1>

                <p>
                     Learn Smarter. Practice Better.
                     Crack AP ECET with AI-powered study plans,
                     mock tests and performance analytics.
                </p>

                <div className="hero-buttons">
                    <button className="primary-btn">
                        Get Started
                    </button>
                    <button className="secondary-btn">
                        Explore Mock Tests
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;