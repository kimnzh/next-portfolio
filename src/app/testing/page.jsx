import { Suspense } from "react";

import Content from "./component/Content";

export default function Page() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}
