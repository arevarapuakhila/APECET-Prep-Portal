import "../styles/cta.css"
//CTA means Call to Action,this section encourages users to take the next step

function CTA(){
    return( 
    <section className="cta">
    <div className="cta-content">
    <h2>Ready to crack AP ECET 2027?</h2>
    <p>
       Start your preparation today with AI-powered study plans,
       mock tests, performance analytics, 
       and comprehensive learning resources. 
    </p>
        <div className="cta-buttons">
             <button>Get Started</button>
        </div>
    </div>
    </section>
    );
}
export default CTA;