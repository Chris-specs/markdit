module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                editor: 'Menlo, Monaco, "Courier New", monospace',
            },
            colors: {
                'green-brand': '#2EC4B6',
                'dark-brand': '#1e1e1e',
            },
        },
    },
    plugins: [],
};
