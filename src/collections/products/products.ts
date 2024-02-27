import { BeforeChangeHook } from "payload/dist/collections/config/types";
import { PRODUCT_CATEGORY } from "./../../config";
import { CollectionConfig } from "payload/types";
import { Product, User } from "@/payload-types";
import { stripe } from "../../lib/stripe";

const addUser: BeforeChangeHook<Product> = async ({ req, data }) => {
  const user = req.user as User;
  return {
    ...data,
    user: user.id,
  };
};
export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {},
  hooks: {
    beforeChange: [
      addUser,
      async (args) => {
        if (args.operation === "create") {
          const data = args.data as Product;

          const createProduct = await stripe.products.create({
            name: data.name,
            default_price_data: {
              currency: "USD",
              unit_amount: Math.round(data.price * 100),
            },
          });

          const updatedProduct: Product = {
            ...data,
            stripeId: createProduct.id,
            priceId: createProduct.default_price as string,
          };

          return updatedProduct;
        } else if (args.operation === "update") {
          const data = args.data as Product;

          const updatedProduct = await stripe.products.update(data.stripeId!, {
            name: data.name,
            default_price: data.priceId!,
          });

          const update: Product = {
            ...data,
            stripeId: updatedProduct.id,
            priceId: updatedProduct.default_price as string,
          };  

          return update;
        }
      },
    ],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Product Details",
    },
    {
      name: "price",
      type: "number",
      label: "Price",
      min: 0,
      max: 1000,
      required: true,
    },
    {
      name: "category",
      type: "select",
      label: "Category",
      options: PRODUCT_CATEGORY.map(({ label, value }) => ({ label, value })),
      required: true,
    },
    {
      name: "product_files",
      label: "Product File",
      type: "relationship",
      required: true,
      relationTo: "product_files",
      hasMany: false,
    },
    {
      name: "approvedForSale",
      label: "Product Status",
      type: "select",
      defaultValue: "pending",
      access: {
        create: ({ req }) => req.user.role === "admin",
        read: ({ req }) => req.user.role === "admin",
        update: ({ req }) => req.user.role === "admin",
      },
      options: [
        { label: "Pending Verificaiton", value: "pending" },
        {
          label: "Approved for Sale",
          value: "approved",
        },
        {
          label: "Denied",
          value: "denied",
        },
      ],
    },
    {
      name: "priceId",
      type: "text",
      admin: {
        hidden: true,
      },
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
    },
    {
      name: "stripeId",
      type: "text",
      admin: {
        hidden: true,
      },
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
    },
    {
      name: "images",
      type: "array",
      label: "Product Images",
      minRows: 0,
      maxRows: 4,
      required: true,
      labels: {
        singular: "image",
        plural: "images",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          label: "Image",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
