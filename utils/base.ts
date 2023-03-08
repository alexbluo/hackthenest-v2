const base =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.hackthenest.org";

export default base;
