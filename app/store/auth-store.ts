import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      walletAddress: null,
      login: (email, password) => {
        const user = { email, password };
        set({ user });
      },
      signup: (username, email, password) => {
        const user = { username, email, password };
        set({ user });
      },
      logout: () => {
        set({ user: null });
      },
      updateAddress: (walletAddress) => {
        set({ walletAddress: walletAddress });
      },
      removeAddress: () => {
        set({ walletAddress: null });
      },
    }),
    {
      name: "auth-storage", // unique name for localStorage key
      storage: createJSONStorage(() => sessionStorage), // default localStorage
    }
  )
);

export default useAuthStore;
