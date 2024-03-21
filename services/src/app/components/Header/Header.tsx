import Image from "next/image";
import styles from "./Header.module.css";

interface HeaderProps {
  isChecked?: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ isChecked, setIsChecked }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="logo" width={150} height={75} />
      <nav>
        <ul className={styles.list}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tasks">Tasks</a>
          </li>
          <li>
            <a href="/favorites">Favorites</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
