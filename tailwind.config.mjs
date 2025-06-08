import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(0, 0, 0)',
          75: 'rgb(64, 64, 64)',
          50: 'rgb(120, 120, 120)',
          25: 'rgb(180, 180, 180)',
          10: 'rgb(230, 230, 230)',
        },
        background: {
          DEFAULT: 'rgb(250, 250, 250)',
          surface: 'rgb(245, 245, 245)',
          code: 'rgb(240, 240, 240)',
        },
        action: {
          DEFAULT: 'rgb(64, 64, 64)',
          hover: 'rgb(0, 0, 0)',
          active: 'rgb(32, 32, 32)',
        },
      },
      fontFamily: {
        sans: ["portada", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      typography: {
        DEFAULT: {
          css: {
            'hr': {
              display: 'none',
            },
            'p, ul, ol, li, blockquote': {
              fontFamily: 'portada',
              color: 'rgb(120, 120, 120)',
              fontWeight: 400,
              fontSize: ['1rem', '1.125rem'],
              lineHeight: '1.75',
            },
            'h1': {
              fontFamily: 'portada',
              color: 'rgb(0, 0, 0)',
              fontWeight: 700,
              fontSize: ['1.875rem', '2.25rem'],
              lineHeight: '1.2',
              marginBottom: '2rem',
            },
            'h2': {
              fontFamily: 'portada',
              color: 'rgb(64, 64, 64)',
              fontWeight: 600,
              fontSize: ['1.25rem', '1.5rem'],
              lineHeight: '1.3',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            'h3': {
              fontFamily: 'portada',
              color: 'rgb(64, 64, 64)',
              fontWeight: 600,
              fontSize: ['1.125rem', '1.25rem'],
              lineHeight: '1.3',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            'h4': {
              fontFamily: 'portada',
              color: 'rgb(64, 64, 64)',
              fontWeight: 600,
              fontSize: ['1rem', '1.125rem'],
              lineHeight: '1.3',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            'code': {
              color: 'rgb(120, 120, 120)',
              backgroundColor: 'rgb(240, 240, 240)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
              fontFamily: 'IBM Plex Mono',
            },
            'a': {
              color: 'rgb(64, 64, 64)',
              textDecoration: 'underline',
              textDecorationColor: 'rgb(230, 230, 230)',
              '&:hover': {
                color: 'rgb(0, 0, 0)',
                textDecorationColor: 'rgb(180, 180, 180)',
              },
            },
          },
        },
        invert: {
          css: {
            'p, ul, ol, li, blockquote': {
              fontFamily: 'portada',
              color: 'rgb(220, 220, 220)',
              fontWeight: 400,
              fontSize: ['1rem', '1.125rem'],
              lineHeight: '1.75',
            },
            'h1': {
              fontFamily: 'portada',
              color: 'rgb(255, 255, 255)',
              fontWeight: 700,
              fontSize: ['1.875rem', '2.25rem'],
              lineHeight: '1.2',
              marginBottom: '2rem',
            },
            'h2': {
              fontFamily: 'portada',
              color: 'rgb(240, 240, 240)',
              fontWeight: 600,
              fontSize: ['1.25rem', '1.5rem'],
              lineHeight: '1.3',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            'h3': {
              fontFamily: 'portada',
              color: 'rgb(240, 240, 240)',
              fontWeight: 600,
              fontSize: ['1.125rem', '1.25rem'],
              lineHeight: '1.3',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            'h4': {
              fontFamily: 'portada',
              color: 'rgb(240, 240, 240)',
              fontWeight: 600,
              fontSize: ['1rem', '1.125rem'],
              lineHeight: '1.3',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            'code': {
              color: 'rgb(230, 230, 230)',
              backgroundColor: 'rgb(38, 38, 38)',
            },
            'a': {
              color: 'rgb(220, 220, 220)',
              textDecorationColor: 'rgb(64, 64, 64)',
              '&:hover': {
                color: 'rgb(255, 255, 255)',
                textDecorationColor: 'rgb(140, 140, 140)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
