import { FC, ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { ErrorFallback } from "../error-fallback";
import Sidebar from "../sidebar/index";
import Loader from "../spinner/Loader";
import Header from "../header/Header";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="h-vh-100 flex bg-white overflow-hidden ">
        <Sidebar />
        {/* <div>side</div> */}
        <div
          className={`flex flex-col flex-grow flex-shrink bg-white overflow-hidden`}
        >
          <Header />
          <div className="layout-content relative">
            <Suspense
              fallback={
                <div className="w-[100vw] h-[100vh] flex justify-center items-center">
                  <Loader color="green" className="h-12 w-12" />
                </div>
              }
            >
              {children || <Outlet />}
            </Suspense>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default MainLayout;
