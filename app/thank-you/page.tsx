import { getServerSideUser } from "@/lib/payload-utils";
import Image from "next/image";
import { cookies } from "next/headers";
import payload from "payload";
import { getPayloadClient } from "@/get-payload";
import { notFound, redirect } from "next/navigation";
import { Product, ProductFile, User } from "@/payload-types";
import { PRODUCT_CATEGORY } from "@/config";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import PaymentStatus from "@/components/PaymentStatus";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
const ThankYou = async ({ searchParams }: PageProps) => {
  const orderId = searchParams.orderId;
  const nextCookies = cookies();

  const { user } = await getServerSideUser(nextCookies);

  const payload = await getPayloadClient();

  const { docs: orders } = await payload.find({
    collection: "orders",
    depth: 2,
    where: {
      id: {
        equals: orderId,
      },
    },
  });

  const [order] = orders;

  if (!order) return notFound();

  const orderUserId =
    typeof order.user === "string" ? order.user : order.user.id;

  if (orderUserId !== user?.id) {
    return redirect(`/login?origin=thank-you?${order.id}`);
  }
  {
    console.log({ order });
  }
  const products = order.products as Product[];
  const orderTotal = products.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <main className="relative ">
      <div className="lg:pr-4 lg:block xl:pr-12 h-80 lg:w-1/2 relative text-center m-auto left-0 top-10 right-0">
        <Image
          fill
          src="/checkout-thank-you.jpg"
          className="h-full w-full object-cover object-center"
          alt="thank you image"
        />
      </div>
      <div>
        <div className="max-auto max-w-2xl py-16 px-4 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
          <div className="lg:col-start-2 ">
            <p className="text-sm font-medium text-blue-600 text-left ">
              Order Successfull{" "}
            </p>
            <h1 className="nt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Thanks for ordering
            </h1>
            {order._isPaid ? (
              <p className="mt-2 text-base text-muted-foreground">
                Your order was processed and your assets are available to
                download. We&apos;ve sent you reciept and order details
                {typeof order.user !== "string" ? (
                  <span className="font-medium text-gray-900">
                    {order.user.email}
                  </span>
                ) : null}
                .
              </p>
            ) : (
              <p className="mt-2 text-base text-muted-foreground">
                We appreciate your order and we&apos;re currently processing it
                and we&apos;ll send you confirmation very soon!
              </p>
            )}

            <div className="mt-16 text-sm font-medium">
              <div className="text-muted-foreground "> Order nr.</div>
              <div className="mt-2 text-gray-900 ">{order.id}</div>
              <ul className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-muted-foreground">
                {(order.products as Product[]).map((product) => {
                  const lable = PRODUCT_CATEGORY.find(
                    ({ value }) => value === product.category
                  )?.label;

                  const downloadUrl = (product.product_files as ProductFile)
                    .url as string;
                  const { image } = product.images[0];

                  return (
                    <li key={product.id} className="flex space-x-6 py-6">
                      <div className="relative h-24 w-24">
                        {typeof image !== "string" && image.url ? (
                          <Image
                            fill
                            src={image.url}
                            alt={` ${product.name} image `}
                            className="flex-none rounded-md bg-gray-100 object-cover object-center"
                          />
                        ) : null}
                      </div>
                      <div className="flex-auto flex flex-col justify-between  ">
                        <div className="space-y-1">
                          <h3 className="texxt-gray-900">{product.name}</h3>
                          <p className="my-1">Category : {lable}</p>
                        </div>
                        <div>
                          {order._isPaid ? (
                            <a
                              className="text-blue-600 hover:underline hover:text-blue-400"
                              href={downloadUrl}
                              download={product.name}
                            >
                              Download asset
                            </a>
                          ) : null}
                        </div>
                        <p className="flex-none font-medium text-gray-900">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-muted-foreground">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p className="text-gray-900">{formatPrice(orderTotal)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Transaction fee</p>
                  <p className="text-gray-900">{formatPrice(1)}</p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                  <p className="text-base ">total</p>
                  <p className="text-base ">{formatPrice(orderTotal + 1)}</p>
                </div>
              </div>
              <div>
                <PaymentStatus _isPaid={order._isPaid} orderEmail={(order.user as User).email} orderId={order.id}/>
              </div>
              <div className="mt-16 border-t border-gray-100 pt-6 text-right">
                <Link
                  href="/products"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Continue Shopping &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
