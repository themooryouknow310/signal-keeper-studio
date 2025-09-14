import { useParams } from "react-router-dom";
import ProgrammaticPageTemplate from "@/templates/ProgrammaticPageTemplate";
import { getProgrammaticRouteConfig } from "@/utils/routeGenerator";
import NotFound from "@/pages/NotFound";

const DynamicRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <NotFound />;
  }
  
  const config = getProgrammaticRouteConfig(slug);
  
  if (!config) {
    return <NotFound />;
  }
  
  return <ProgrammaticPageTemplate config={config} />;
};

export default DynamicRoute;