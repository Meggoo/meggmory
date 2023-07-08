import { useEffect } from "react";
import SCInfo from "./Info.styled.jsx";
import useGlobalState from "../../hooks/useGlobalState.js";

export default function Info() {
  const state = useGlobalState();

  useEffect(() => {
    state.set_gaming_state(false);
  }, []);

  return (
    <SCInfo>
      info Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
      commodi cumque dolor quibusdam consectetur, vitae dolorem, aperiam iste
      inventore atque officiis? Qui cum reprehenderit cumque consequatur quidem
      quibusdam debitis fuga, hic sit exercitationem saepe excepturi enim? Illo
      facere tempora ipsa ipsam autem neque voluptas ratione quam iste, dolorum
      ab atque.{" "}
    </SCInfo>
  );
}
