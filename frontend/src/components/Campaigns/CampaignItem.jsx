import { Link } from "react-router-dom";
import "./CampaignItem.css";
 
 const CampaignItem = () => {
   return (
     <div className="campaign-item">
       <h3 className="campaign-title">
         Fashion Month <br />
         Ready in Capital <br />
         Shop
       </h3>
       <p className="campaign-desc">
         Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
       </p>
       <Link to="/campaigns" className="btn btn-primary">
  View All
  <i className="bi bi-arrow-right"></i>
</Link>
     </div>
   );
 };
 
 export default CampaignItem;