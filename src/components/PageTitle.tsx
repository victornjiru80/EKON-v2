import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const getTitle = (pathname: string) => {
  if (pathname === "/") return "TEKON Builders";
  if (pathname.startsWith("/about")) return "About TEKON ";
  if (pathname.startsWith("/services")) return "Our Services";
  if (pathname.startsWith("/projects")) return "Featured Projects";
  if (pathname.startsWith("/contact")) return "Contact us";
  return "TEKON Construction";
};

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = getTitle(location.pathname);
  }, [location.pathname]);

  return null;
};

export default PageTitle;