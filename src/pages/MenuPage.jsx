import foodData from "../data/food";
import MenuSection from "../components/MenuSection";

const MenuPage = () => {
  const breakfast = foodData.filter(f => f.mealType === "Breakfast");
  const mainDish = foodData.filter(f => f.mealType === "main-dish");
  const appetizers = foodData.filter(f => f.mealType === "appetizer");
  const cocktail = foodData.filter(f => f.mealType === "cocktail");
  const platters = foodData.filter(f => f.mealType === "platters");
  const sides = foodData.filter(f => f.mealType === "sides");

  return (
    <div className="max-w-360 mx-auto px-8  md:px-12 lg:px-6 py-20 rounded-xl">
      <h1 className="text-3xl lg:text-5xl font-bold text-center text-white pt-16 mb-4">
        <span className="text-amber-500">Hungry? </span>Let's Serve You!
      </h1>
      <p className="text-base lg:text-xl text-gray-400 text-center mb-10 lg:mb-16">From hearty breakfasts to satisfying dinners, every meal is made with love.</p>

      
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 ">
        <MenuSection id="Breakfast" title="Breakfast" image="/images/breakfast.jpg" foods={breakfast} />
        <MenuSection title="Appetizers" image="/images/food6.jpg" foods={appetizers} />
        <MenuSection id="mainDish" title="Main Dish" image="/images/friedrice.jpg" foods={mainDish} />
        <MenuSection title="Food Platters" image="/images/platter1.jpg" foods={platters} />
        <MenuSection title="Sides" image="/images/food5.jpg" foods={sides} />
        <MenuSection title="Cocktails/Drinks" image="/images/cocktail4.jpg" foods={cocktail} />
      </div>
    </div>
  );
};

export default MenuPage;
