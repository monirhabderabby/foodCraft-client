/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                sm: "480px",
                md: "768px",
                lg: "976px",
                xl: "1440px",
            },
            colors: {
                red: "#F54748",
                orange: "#FF8A01",
                "navy-blue": "#021A49",
                "light-red": "#FEF4F4",
                "light-gray": "#686868",
            },
            fontFamily: {
                Inter: ["Inter", "sans-serif"],
                serif: ["Roboto-Serif", "serif"],
            },
            fontWeight: {
                300: "300",
                400: "400",
                500: "500",
                600: "600",
                700: "700",
                800: "800",
            },
            fontSize: {
                "14px": "14px",
                "18px": "18px",
                "20px": "20px",
                "48px": "48px",
                "75px": "75px",
            },
            lineHeight: {
                "26px": "26px",
                "30px": "30px",
                "32px": "32px",
                "34px": "34px",
                "58px": "58px",
                "85px": "85px",
            },
            borderRadius: {
                "13px": "13px",
                "21px": "21px",
                "23.5px": "23.5px",
                "25px": "25px",
                "35px": "35px",
                "47px": "47px",
                oneSide: "200px 0px 0px 0px",
            },
        },
    },
    plugins: [],
};
