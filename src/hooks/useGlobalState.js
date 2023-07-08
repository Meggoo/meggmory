import { create } from "zustand";

const useGlobalState = create((set) => ({
  level: null,
  score: null,
  levelScore: null,
  highestScore: null,
  images: null,
  checked: null,
  restart_level: null,
  isGaming: true,
  theme: "dark",
  themes: ["light", "dark"],
  set_theme: (theme) => set({ theme }),
  set_gaming_state: (isGaming) => set({ isGaming }),
  set_level: (level) => set({ level }),
  set_score: (score) => set({ score }),
  set_highest_score: (highestScore) => set({ highestScore }),
  set_level_score: (levelScore) => set({ levelScore }),
  set_images: (images) => set({ images }),
  set_checked: (checked) => set({ checked }),
  reset: () =>
    set({
      level: null,
      score: null,
      levelScore: null,
      // highestScore: null,
      images: null,
      checked: null,
    }),
}));

export default useGlobalState;
