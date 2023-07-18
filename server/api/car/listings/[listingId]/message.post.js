import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const schema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  name: Joi.string().required(),
  message: Joi.string().min(20).required(),
});

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { listingId } = event.context.params;
  const { error, value } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  const {
    name,             
    email,           
    phone,          
    message,                
  } = body

   const mes = await prisma.message.create({
    data: {
        message,
        email,
        name,
        phone,
        listingId: parseInt(listingId)
    }
  });

  return mes
});
