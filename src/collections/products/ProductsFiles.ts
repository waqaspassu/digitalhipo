import { User } from "../../payload-types";
import { BeforeChangeHook } from "payload/dist/collections/config/types";
import { Access, CollectionConfig } from "payload/types";

const addUser: BeforeChangeHook = ({ req, data }) => {
  const user = req.user as User | null;
  return {
    ...data,
    user: user?.id,
  };
};

const yourOwnedAndPurchesed: Access = async ({ req }) => {
  const user = req.user as User | null;
  if (user?.role === "admin") return true;
  if (!user) return false;
  const {} = await req.payload.find({
    collection: "products",
    depth:0,
    where: {
      user: {
        equals: user.id,
      },
    },
  });
};
export const ProductFiles: CollectionConfig = {
  slug: "product_files",
  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },
  hooks: {
    beforeChange: [addUser()],
  },
  access: {
    read: yourOwnedAndPurchesed,
  },
  upload: {
    staticURL: "/product_files",
    staticDir: "product_files",
    mimeTypes: ["image/*", "font/*", "application/postscript"],
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
  ],
};
