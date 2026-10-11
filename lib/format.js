import dayjs from "https://cdn.jsdelivr.net/npm/dayjs@1.11.13/+esm";

export const formatPrice = n => "₹" + n.toLocaleString("en-IN");

export const formatDate = (d = new Date()) =>
  dayjs(d).format("DD MMM YYYY");