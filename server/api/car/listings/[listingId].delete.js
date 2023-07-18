import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const { listingId } = event.context.params;

  const result = await prisma.car.delete({
    where: {
        id: parseInt(listingId)
    }
 });

 return result
});
