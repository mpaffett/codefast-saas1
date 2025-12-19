import Link from "next/link";

const ButtonLogin = ({ name, isLoggedIn, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""} `}
      >
        Welcome back, {name}!
      </Link>
    );
  }

  return <button className="btn btn-primary">Log in</button>;
};

export default ButtonLogin;
