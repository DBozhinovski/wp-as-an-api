import WooCommerceRestApi from "woocommerce-rest-ts-api";

const api = new WooCommerceRestApi({
  url: "http://localhost:8081",
  consumerKey: "ck_ad1b278b172fa28618e43922b126bf89ed85bd78",
  consumerSecret: "cs_885e0b79c219aba326af8278c93d971a74734342",
  version: "wc/v3",
  queryStringAuth: false // Force Basic Authentication as query string true and using under HTTPS
});

export async function getProducts({ perPage = 20 }: { perPage: number }) {
  const products = await api.get('products', {
    per_page: perPage,
  });

  console.log("Total of pages:", products.headers['x-wp-totalpages']);
  console.log("Total of items:", products.headers['x-wp-total']);

  return products.data;
}