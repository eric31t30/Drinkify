import { useEffect, useState } from "react";
import "../styles/drink-details.css";
import { useParams } from "react-router-dom";

function DrinkDetails() {

  const { id } = useParams();
  const [drink, setDrink] = useState([])

  useEffect(() => {

    const getdrink = async()=>{
        try{
            const res = await fetch(`http://localhost:3000/drink/${id}`);
            const data = await res.json()

            setDrink(data)
            console.log(data);
            
        }catch(err){
            console.error("Error al cargar la bebida", err);   
        }
    }

    getdrink();
    
  }, [id])
  

  return (
    <div className="drink">
      <h1>detalles de { drink.name }</h1>
    </div>
  );
}

export default DrinkDetails;
