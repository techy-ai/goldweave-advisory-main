import { site } from "@/data/site";
import { services } from "@/data/services";

export default function sitemap() {
  const routes = ["/", "/about", "/services", "/faq", "/contact"];

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date().toISOString(),
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];
}
