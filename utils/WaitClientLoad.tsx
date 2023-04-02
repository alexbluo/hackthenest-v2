import { useEffect, useState } from "react";

interface Props {
  children: JSX.Element;
}

// https://stackoverflow.com/questions/75726866/next-js-13-hydration-error-when-conditionally-applying-initial-framer-motion-an
const WaitClientLoad = ({ children }: Props) => {
  const [clientLoaded, setClientLoaded] = useState<boolean>(false);

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  return clientLoaded ? children : null;
};

export default WaitClientLoad;
