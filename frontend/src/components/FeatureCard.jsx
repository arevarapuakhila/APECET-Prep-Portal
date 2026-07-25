import "../styles/featureCard.css"
function FeatureCard({ icon,title, description })
{
   return(
    <div className="feature-card">
        <h3>{icon}</h3>
           <h2>{title}</h2>
        <p>{description}</p>
    </div>
   ); 
}
export default FeatureCard;