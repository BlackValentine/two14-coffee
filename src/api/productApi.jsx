import axiosClient from './axiosClient';

const createProduct = (product) => {
  const url = '/product/create-product';
  if (product.type === "coffee") {
    return axiosClient.post(url, {
      type: product.type,
      name: product.name,
      author: product.author,
      roast: product.roast,
      origin: product.origin,
      taste: product.taste,
      price: product.price,
      description: product.description,
      image: product.image
    });
  }
};

const getProduct = (pruductType, productId) => {
  const url = `/blog/get-blogs?id=${pruductType}&type=${productId}`;
  return axiosClient.get(url);
};

const editBlog = (dataBlog) => {
  const url = '/blog/edit-blog';
  return axiosClient.put(url, {
    id: dataBlog.id,
    title: dataBlog.titleBlog,
    subtitle: dataBlog.subtitleBlog,
    image: dataBlog.imageBlog,
    content: dataBlog.contentBlog,
    rawContent: dataBlog.rawContentBlog,
  });
};

const productApi = {
  createProduct,
  getProduct,
  editBlog,
};

export default productApi;
