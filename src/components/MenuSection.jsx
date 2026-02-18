import MenuItem from "./MenuItem";

export default function MenuSection({id, title, foods, image }) {
  return (
    <section className="mb-16 text-white mt-10 shadow rounded-2xl py-6 px-2 shadow-amber-50">

      <h2 className="text-xl md:text-2xl font-bold py-6 mb-4 text-center text-amber-500">{title}</h2>
      <img
        src={image}
        alt={title}
        className="w-full h-40 md:h-80 object-cover rounded-lg mb-8"
      />

      <div className="grid grid-cols-1 lg:gap- px-3">
            {foods.map(food => (
                <MenuItem key={food.id} food={food} />
            ))}
            </div>

    </section>
  );
}
