module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollMove: {
          '100%': {
            transform: 'translate(200px, 100px) scale(1) rotate(180deg)'
          }
        },
        scrollMove2: {
          '0%': {
            opacity: 0,
            transform: 'translate(-50vw, 0) scale(0.01) rotate(-1800deg)',
          },
          '25%': {
            transform: 'translate(-25vw, 0) scale(0.5) rotate(0)'
          },
          '50%': {
            opacity: 1,
            transform: 'translate(0, 0) scale(1)'
          },
          '90%': {
            opacity: 1,
            transform: 'translate(0, 0) scale(1)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate(0, 0) scale(1)'
          },
        },
        scrollMove3: {
          '0%': {
            opacity: 0,
          },
          '20%': {
            opacity: 0,
          },
          '40%': {
            opacity: 1
          },
          '60%': {
            opacity: 1,
          },
          '80%': {
            opacity: 0,
          },
          '100%': {
            opacity: 0,
          },
        },
        simpleTextFadeIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.8)'
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          },
        },
        delayedTextFadeIn: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            opacity: 0,
            transform: 'scale(1)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          },
        },
        quickFadeOut: {
          '0%': {
            opacity: 1,
          },
          '10%': {
            opacity: 0,
          },
          '100%': {
            opacity: 0,
          },
        },
        swingIn: {
          '0%': {
            transform: 'rotateY(-100deg) skewY(10deg)',
            transformOrigin: 'left',
            opacity: 0,
          },
          '25%': {
            transform: 'rotateY(-100deg) skewY(10deg)',
            transformOrigin: 'left',
            opacity: 0,
          },
          '50%': {
            transform: 'rotateX(0deg) skewY(0)',
            transformOrigin: 'left',
            opacity: 1,
          },
          '100%': {
            transform: 'rotateX(0deg) skewY(0)',
            transformOrigin: 'left',
            opacity: 1,
          }
        },
        scaleUp: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(2)',
          },
          '100%': {
            transform: 'scale(2)',
          }
        },
        blinking: {
          '0%': {
            opacity: 0.4,
          },
          '50%': {
            opacity: 0.8,
          },
          '100%': {
            opacity: 0.4,
          },
        }
      },
      animation: {
        scrollMove: 'scrollMove',
        scrollMove2: 'scrollMove2 linear',
        scrollMove3: 'scrollMove3',
        simpleTextFadeIn: 'simpleTextFadeIn ease',
        delayedTextFadeIn: 'delayedTextFadeIn ease',
        quickFadeOut: 'quickFadeOut ease',
        swingIn: 'swingIn ease',
        scaleUp: 'scaleUp ease',
        blinking: 'blinking ease-in-out 1.5s infinite'
      }
    },
  },
  plugins: [],
}