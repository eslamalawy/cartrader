// import cars from "@/data/cars.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event);

  // let filteredCars = cars;

  const filters = {
    city: city.toLowerCase(),
  };

  // filteredCars = filteredCars.filter((car) => {
  //   return car.city.toLowerCase() === city.toLowerCase();
  // });

  if (make) {
    // filteredCars = filteredCars.filter((car) => {
    //   return car.make.toLowerCase() === make.toLowerCase();
    // });
    filters.make = make;
  }

  if (minPrice || maxPrice) {
    filters.price = {};
  }

  if (minPrice) {
    // filteredCars = filteredCars.filter((car) => {
    //   return car.price >= parseInt(minPrice);
    // });
    filters.price.gte = parseInt(minPrice);
  }

  if (maxPrice) {
    // filteredCars = filteredCars.filter((car) => {
    //   return car.price <= parseInt(maxPrice);
    // });
    filters.price.lte = parseInt(maxPrice);
  }

  const result = await prisma.car.findMany({
    where: filters,
  });


  return result;
});
