import "./IngredientInput.css"
import { useState } from 'react';
import AI_Recipe from "./AI_Recipe";
function IngredientInput() {
    const [state, setState] = useState([]);
    const [result, setResult] = useState(false);
    function handleResult() {
        setResult(result => !result,
            console.log())
    }



    function handleSubmit(formData) {

        const ingredient = formData.get("ingredient");
        setState((item) => [...item, ingredient])



        console.log("submitted");
    }
    return (
        <div className="IngredientInput">
            <form action={handleSubmit}>
                <input type="text" placeholder=" e.g. - Milk" name="ingredient"></input> &nbsp;
                <button>+ ADD INGREDIENT</button>
            </form>
            {state.length > 0 && <div className="list">
                <h2>List of Ingredients Added</h2>
                {state.map((item, index) => (
                    <ul>
                        <li key={index}>{item}</li>
                    </ul>
                ))}
                {state.length > 2 && <div className="recipe-container">
                    <div>
                        <h3>Ready for a Recipe??</h3>
                        <p>Generate a recipe from your list of ingredient</p>
                    </div>
                    <button className="recipe-button" onClick={handleResult}>Get a Recipe</button>
                </div>}
            </div>
            }
            {
                result && <AI_Recipe />
            }

        </div>
    )
}

export default IngredientInput;