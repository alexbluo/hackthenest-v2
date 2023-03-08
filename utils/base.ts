const base =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "http://hackthenest.org";

export default base;
