/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)']
            },
            colors: {
                'brand-gray': 'rgb(var(--brand-gray) / <alpha-value>)'
            },
            backgroundImage: {
                'main-gradient': 'var(--main-gradient)'
            }
        }
    },
    plugins: []
}
