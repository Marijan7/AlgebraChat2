/** @type {import('tailwindcss').Config} */
module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],

      plugins: [],

      theme: {
            extend: {
                  backgroundImage: (theme) => ({
                        "chat-background":
                              "url('/public/img/chat-background.png')",
                  }),
            },
      },
};
