export const GA_TRACKING_ID = "GTM-5LB7XN4";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
