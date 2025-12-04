import "../styles/drink-details.css";
import { useParams } from "react-router-dom";

function DrinkDetails() {
  const { id } = useParams();

  return (
    <div className="drink">
      <h1>detalles de { id }</h1>
    </div>
  );
}

export default DrinkDetails;
