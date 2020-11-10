import { useRouter } from "next/router";
import Link from "next/link";
import useAuth from "../auth/context";

export const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();
  console.log(user);

  const styles = {
    main: {
      padding: 30,
      margin: 30,
      border: "1px solid #DDD",
    },
    link: {
      margin: 15,
    },
    active: {
      margin: 15,
      color: "blue",
    },
  };
  return (
    <div style={styles.main}>
      <Link href="/" passHref>
        <span style={router.pathname === "/" ? styles.active : styles.link}>
          Home
        </span>
      </Link>
      <Link href="/profile" passHref>
        <span
          style={router.pathname === "/profile" ? styles.active : styles.link}
        >
          Profile
        </span>
      </Link>
      {isAuthenticated && user.role === "admin" && (
        <Link href="/dashboard" passHref>
          <span
            style={
              router.pathname === "/dashboard" ? styles.active : styles.link
            }
          >
            Dashboard
          </span>
        </Link>
      )}
      {isAuthenticated && (
        <>
          <span style={styles.link}>Bonjour {user.username}</span>
          <button style={styles.link} onClick={logout}>
            Deconnexion
          </button>
        </>
      )}
      {!isAuthenticated && (
        <>
          <Link href="/login" passHref>
            <span
              style={router.pathname === "/login" ? styles.active : styles.link}
            >
              login
            </span>
          </Link>
        </>
      )}
    </div>
  );
};
