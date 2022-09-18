import { BsTwitter, BsFacebook } from "react-icons/bs";
import { LayoutProps } from "../../types";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="App min-h-screen bg-gray-100">
      <div className="container bg-white">
        <div className="min-h-screen flex flex-col">
          <header className="py-4 mb-8 border-b-1 border-b-gray-200 border-b">
            <h1 className="text-xl font-bold ">
              Todo <span className="text-blue-500">App</span>
            </h1>
          </header>
          {children}
          <footer className="py-8 mt-auto">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400 font-light">
                © 2022 Todo App. All rights reserved.
              </p>
              <ul className="flex">
                <li>
                  <a href="#" className="text-blue-500">
                    <BsFacebook fontSize="1.25rem" />
                  </a>
                </li>
                <li className="ml-5">
                  <a href="#" className="text-blue-500">
                    <BsTwitter fontSize="1.25rem" />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
