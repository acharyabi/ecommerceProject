"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartProvider } from "./cart-context";
export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  interface Heading {
    title: string;
    url: string;
  }
  const heading = [
    {
      title: "Shopping Cart",
      url: "/cart",
    },
    {
      title: "Delivery Option",
      url: "/cart/delivery",
    },
    {
      title: "Payment",
      url: "/cart/payment",
    },
  ];
  const pathname = usePathname();
  return (
    <CartProvider>
      <div className="mt-16">
        <section className="flex justify-between gap-[1px] overflow-hidden  border-2 border-primary rounded-full font-Fredoka text-primary">
          {heading.map((data: Heading) => (
            <div
              className=" p-2  sm:p-4 w-full  text-center "
              style={{
                backgroundColor: pathname === data.url ? "#F453AD" : "white",
                color: pathname === data.url ? "white" : "#F453AD",
              }}
              key={data.title}
            >
              <Link href={data.url}>{data.title}</Link>
            </div>
          ))}
        </section>
        {children}
      </div>
    </CartProvider>
  );
}
