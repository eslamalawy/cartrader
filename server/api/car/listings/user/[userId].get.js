import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const { userId } = event.context.params;

  return prisma.car.findMany({
    where: {
      listerId: userId,
    },
    select: {
      id: true,
      name: true,
      image: true,
      price: true,
    },
  });
});
