import { useIntersectionObserver } from "@app/hooks";
import { Suspense, lazy } from "react";

const TrendingSearches = lazy(() => import("./components/TrendingSearches"));

export type LazyTrendingProps = {};

const LazyTrending = ({}: LazyTrendingProps) => {
  const { isIntersecting, elementRef } = useIntersectionObserver({});

  return (
    <div ref={elementRef}>
      <Suspense fallback={<h1>Loading...</h1>}>
        {isIntersecting ? <TrendingSearches /> : <h1>Loading...</h1>}
      </Suspense>
    </div>
  );
};

export default LazyTrending;

// https://tanpure-anjali.medium.com/dynamic-modals-with-separate-url-address-c8bda1709077
