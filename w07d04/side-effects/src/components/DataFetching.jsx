import {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([
    {
      id: 4,
      title: 'nachos',
      ingredients: []
    },
    {
      id: 5,
      title: 'pancakes',
      ingredients: []
    },
  ]);

  useEffect(() => {
    const baseUrl = 'https://my-json-server.typicode.com/andydlindsay/chef-andy';
   
    const recipePromise = axios.get(`${baseUrl}/recipes`);
    const ingredientPromise = axios.get(`${baseUrl}/ingredients`);

    const promises = [recipePromise, ingredientPromise];

    Promise.all(promises)
      .then((responseArr) => {
        // console.log(responseArr);
        const recipeResponse = responseArr[0];
        setRecipes(recipeResponse.data);

        setIngredients(responseArr[1].data);
      });

    // axios.get()

    // axios.get(`${baseUrl}/recipes`)
    //   .then((response) => {
    //     console.log(response.data);
    //     // setRecipes([
    //     //   ...recipes,
    //     //   ...response.data
    //     // ]);

    //     setRecipes((prevRecipes) => {
    //       return [
    //         ...response.data,
    //         ...prevRecipes
    //       ];
    //     });
    //   });
  }, []);

  const recipeArr = recipes.map((recipe) => {
    return <p key={recipe.id}>{recipe.title} ({recipe.id})</p>
  });

  return (
    <div>
      <h2>Data Fetching!</h2>

      <h2>Num ingredients: {ingredients.length}</h2>

      { recipeArr }
    </div>
  );
};

export default DataFetching;
