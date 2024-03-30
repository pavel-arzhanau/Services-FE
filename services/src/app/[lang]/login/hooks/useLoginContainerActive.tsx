import { useEffect, useState } from "react";

export default function useLoginContainerActive() {
  const [isContainerActive, setIsContainerActive] = useState(false);

  useEffect(() => {
    const registerBtn = document.getElementById("register") as HTMLElement;
    const loginBtn = document.getElementById("login") as HTMLElement;

    const addActiveClass = () => {
      setIsContainerActive(true);
    };

    const removeActiveClass = () => {
      setIsContainerActive(false);
    };

    registerBtn.addEventListener("click", addActiveClass);
    loginBtn.addEventListener("click", removeActiveClass);

    return () => {
      registerBtn?.removeEventListener("click", addActiveClass);
      loginBtn?.removeEventListener("click", removeActiveClass);
    };
  }, []);

  return isContainerActive;
}
