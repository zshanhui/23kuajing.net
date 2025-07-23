import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Based in Xiamen and Singapore
          </h3>
          <div className="flex flex-col lg:flex-row justify-center lg:items-start lg:pl-4 lg:w-1/2">
            <div className="flex flex-col">
              <div className="text-white text-center lg:text-left mb-8">
                <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                <ul>
                  <li className="ml-4 mb-2">
                    <a
                      href="/services/manufacturer-direct-commerce"
                      className="hover:underline"
                    >
                      Manufacturer's Direct Commerce (M2BC)
                    </a>
                  </li>
                  <li className="ml-4">
                    <a
                      href="/services/shopify-app-development"
                      className="hover:underline"
                    >
                      Shopify Store App Development
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-white text-center lg:text-left">
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul>
                  <li className="ml-4 mb-2">
                    <a href="/about" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li className="ml-4">
                    <a href="/jobs" className="hover:underline">
                      Jobs
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-white text-center lg:text-left lg:ml-8 mt-8 lg:mt-0">
              <h4 className="text-lg font-semibold mb-4">Our Products</h4>
              <ul>
                <li className="ml-4 mb-2">
                  <a
                    href="https://bateriafreyne.com"
                    target="_blank"
                    className="hover:underline"
                  >
                    BateriaFreyne marketplace
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="https://aliscout.lovable.app"
                    target="_blank"
                    className="hover:underline"
                  >
                    Aliscout Chrome Ext.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
