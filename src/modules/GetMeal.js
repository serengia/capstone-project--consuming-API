const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';

const getData = async() =>{
    const response = await fetch(url);
    const data = await response.json();
    return data.meals;
}



