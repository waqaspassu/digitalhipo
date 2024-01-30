import { PRODUCT_CATEGORY } from "./../../config";
import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {},
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
    // {
    //   name: "product_files",
    //   label: "Product File(s",
    //   type: "relationship",
    //   required: true,
    //   relationTo: "product_files",
    //   hasMany: false,
    // },
    {
      name: "approvedForSale",
      label: "Product Status",
      type: "select",
      defaultValue: "pending",
      access:{
        create:({req})=> req.user.role === "admin",
        read:({req})=> req.user.role === "admin",
        update:({req})=> req.user.role === "admin"
        
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
    },{
        name:"priceId",
        type:"text",
        admin:{
            hidden: true,
        },
        access:{
            create:()=> false,
            read:()=> false,
            update:()=> false
        },


    },{
        name:"stripeId",
        type:"text",
        admin:{
            hidden: true,
        },
        access:{
            create:()=> false,
            read:()=> false,
            update:()=> false
        },


    },{
        name:"images",
        type:"array",
        label:"Product Images",
        minRows:0,
        maxRows:4,
        required:true,
        labels:{
            singular:"image",
            plural:"images",
        },
        fields:[
            {
                name:"image",
                type:"upload",
                label:"Image",
                relationTo:"media",
                required:true
            }
        ]
    }
  ],
};
