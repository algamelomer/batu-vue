import { comment } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary_btn: "#4FB3B3",
                neutral_silver: "#F5F7FA",
                neutral_gray: "#717171",
                neutral_d_gray: "#4D4D4D",
                Brand_Primary: "#4FB3B3",
                video_cover: "rgba(79, 179, 179, 0.50);",
                video_cover_hover: "rgba(79, 179, 179, 1);",
                video_slide: "rgba(0, 0, 0, 0.5)",
                footer: "#263238",
                comment: "#D9D9D9",
            },
            width: {
                '38rem': '38rem',
            },
            height: {
                '38rem': '38rem',
            },
            maxWidth: {
                '40rem': '40rem',
            }
        },
    },
    plugins: [],
}