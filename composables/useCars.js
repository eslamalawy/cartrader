import cars from "@/data/cars.json" // @ is the root directory
import makes from "@/data/make.json"
import listings from "@/data/listings.json"
export const useCars = () =>{
return{
cars,
makes,
listings,
};
};