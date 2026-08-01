import { Link } from "react-router";

function Page404() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>404</h2>
      <Link
        to="/"
        style={{
          fontSize: "18px",
          fontWeight: "700",
          margin: "30px auto 0 auto",
          display: "block",
          width: "fit-content",
        }}
      >
        Повернутись на головну
      </Link>
    </>
  );
}

export default Page404;
