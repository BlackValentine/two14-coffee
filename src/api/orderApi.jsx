import axiosClient from './axiosClient';

const createOrder = (order) => {
  const url = `/create-order`
  return axiosClient.post(url, {
    userId: order.userId,
    firstName: order.firstName,
    lastName: order.lastName,
    email: order.email,
    phone: order.phone,
    address: `${order.address}, ${order.apartment}, ${order.city}`,
    totalPrice: order.totalPrice,
    orderDetail: order.orderDetail
  })
}

const orderApi = {
  createOrder
}

export default orderApi;