import { create, createStore } from "zustand";
import { persist } from "zustand/middleware";
const useMessage = create(
  persist(
    (set) => ({
      messages: [
        {
          User: "bot",
          message:
            "Hello! I'm a Charles's bot designed & trained to assist you with questions you might have about the developer. Whether you need information about the developer's skills, work experience ,education ,job, contact, name,bug ,issue, technology or projects, I'm here to help! Feel free to ask me anything and I'll do my best to provide you with accurate and helpful answers. Thank you for visiting!",
        },
      ],

      addMessage: (message) => {
        set((state) => ({
          messages: [...state.messages, message],
        }));
      },
    }),
    { name: "messages" }
  )
);
export default useMessage;
