import NutrientFacts from '../interfaces/Nutrition';


const SearchNutrition = (props:  NutrientFacts | string) => {
    const food = props;
    
    const nutritional = async () => {
      try {
        const response = await fetch(
          '/api/food'
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

const filterProperties = (array, properties) =>
    array.map(obj => 
      properties.reduce((acc, prop) => {
        if (obj.hasOwnProperty(prop)) acc[prop] = obj[prop];
        return acc;
      }, {})
    );
  
  const foodNutrients = [
    {nutrientId: 0, nutrientName: "", derivationDescription: ""}
  ];
  
  const filteredFoods = filterProperties(foodNutrients, ['nutrientId', 'nutrientName', 'derivationDescription']);
  
  console.log(filteredFoods);

        const data = await response.json();
        console.log(data)
        return data;
      } catch (err) {
        console.log("Unable to retrieve data", err);
        return Promise.reject("Could not fetch nutritional facts");
      }
    };
    const search = SearchNutrition();
    return search;
}
export default SearchNutrition;
