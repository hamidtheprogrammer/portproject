export interface INav {
  tags: string[];
  title: string;
  icon?: string;
  link?: string;
  isOpen?: boolean;
  subItems?: INav[];
  blank?: boolean;
}

export const navItems: INav[] = [
  {
    tags: ["dashboards"],
    title: "Dashboards",
    icon: "DashboardIcon.svg",
    isOpen: false,
    subItems: [
      {
        tags: ["dashboards", "e-commerce"],
        title: "E-commerce",
        link: "/dashboards/e-commerce",
      },
    ],
  },
  {
    tags: ["e-commerce"],
    title: "E-commerce",
    icon: "CartIcon.svg",
    isOpen: false,
    subItems: [
      {
        tags: ["e-commerce", "admin"],
        title: "Admin",
        isOpen: false,
        subItems: [
          {
            tags: ["e-commerce", "admin", "add-product"],
            title: "Add product",
            link: "/e-commerce/admin/add-product",
          },
          {
            tags: ["e-commerce", "admin", "products"],
            title: "Products",
            link: "/e-commerce/admin/products",
          },
          {
            tags: ["e-commerce", "admin", "customer-details"],
            title: "Customer details",
            link: "/e-commerce/admin/customer-details",
          },
          {
            tags: ["e-commerce", "admin", "customers"],
            title: "Customers",
            link: "/e-commerce/admin/customers",
          },
        ],
      },
      {
        tags: ["e-commerce", "customer"],
        title: "Customer",
        isOpen: false,
        subItems: [
          {
            tags: ["e-commerce", "customer", "home"],
            title: "Home",
            link: "/e-commerce/customer/home",
            blank: true,
          },
          {
            tags: ["e-commerce", "customer", "products-filtering"],
            title: "Products filtering",
            link: "/e-commerce/customer/products-filtering",
            blank: true,
          },
          {
            tags: ["e-commerce", "customer", "product-details"],
            title: "Product-details",
            link: "/e-commerce/customer/product-details",
            blank: true,
          },
          {
            tags: ["e-commerce", "customer", "cart"],
            title: "Cart",
            link: "/e-commerce/customer/cart",
            blank: true,
          },
          {
            tags: ["e-commerce", "customer", "order-tracking"],
            title: "Order tracking",
            link: "/e-commerce/customer/order-tracking",
            blank: true,
          },
        ],
      },
    ],
  },
  {
    tags: ["travel"],
    title: "Travel",
    icon: "DashboardIcon.svg",
    isOpen: false,
    subItems: [
      {
        tags: ["travel", "portfolio"],
        title: "Portfolio",
        link: "/travel/portfolio",
      },
    ],
  },
];
