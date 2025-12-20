import { getFCP } from "web-vitals";

const onPerfEntry = (metric: any) => {
      console.log(metric);
};
getFCP(onPerfEntry);
