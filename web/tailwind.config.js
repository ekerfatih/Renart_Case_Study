export default {
    content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
    safelist: [
        {
            pattern: /bg-(yellow|white|rose)/,
        },
    ],
    theme: {
        extend: {
            colors: {
                "yellow-gold": "var(--color-yellow-gold)",
                "white-gold": "var(--color-white-gold)",
                "rose-gold": "var(--color-rose-gold)",
            },
            fontFamily: {
                avenir: ['Avenir-Book', 'sans-serif'],
                montserrat: ['Montserrat-Regular', 'sans-serif'],
                'montserrat-medium': ['Montserrat-Medium', 'sans-serif'],
            },
        },
    },
};
