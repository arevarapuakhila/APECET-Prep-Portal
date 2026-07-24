function FeatureCard({ icon,title, description })
{
   return(
    <div>
        <h3>{icon}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
   ); 
}
export default FeatureCard;