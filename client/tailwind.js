module.exports =
  // tailwind.config.js
  {
    theme: {
      transitionProperty: {
        // defaults to these values
        none: 'none',
        all: 'all',
        color: 'color',
        bg: 'background-color',
        border: 'border-color',
        colors: ['color', 'background-color', 'border-color'],
        opacity: 'opacity',
        transform: 'transform'
      },
      transitionDuration: {
        // defaults to these values
        default: '250ms',
        '0': '0ms',
        '100': '100ms',
        '250': '250ms',
        '500': '500ms',
        '750': '750ms',
        '1000': '1000ms',
        '2000': '2000ms',
        '3000': '3000ms'
      },
      transitionTimingFunction: {
        // defaults to these values
        default: 'ease',
        linear: 'linear',
        ease: 'ease',
        'ease-in': 'ease-in',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out'
      },
      transitionDelay: {
        // defaults to these values
        default: '0ms',
        '0': '0ms',
        '100': '100ms',
        '250': '250ms',
        '500': '500ms',
        '750': '750ms',
        '1000': '1000ms'
      },
      willChange: {
        // defaults to these values
        auto: 'auto',
        scroll: 'scroll-position',
        contents: 'contents',
        opacity: 'opacity',
        transform: 'transform'
      },
      animations: {
        // defaults to {}; the following are examples
        spin: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        },
        jump: {
          '0%': {
            transform: 'translateY(0%)'
          },
          '50%': {
            transform: 'translateY(-50%)'
          },
          '100%': {
            transform: 'translateY(0%)'
          }
        }
      },
      animationDuration: {
        // defaults to these values
        default: '1s',
        '05s': '0.5s',
        '0s': '0s',
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
        '4s': '4s',
        '5s': '5s'
      },
      animationTimingFunction: {
        // defaults to these values
        default: 'ease',
        linear: 'linear',
        ease: 'ease',
        'ease-in': 'ease-in',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out'
      },
      animationDelay: {
        // defaults to these values
        default: '0s',
        '0s': '0s',
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
        '4s': '4s',
        '5s': '5s'
      },
      animationIterationCount: {
        // defaults to these values
        default: 'infinite',
        once: '1',
        twice: '2',
        infinite: 'infinite'
      },
      animationDirection: {
        // defaults to these values
        default: 'normal',
        normal: 'normal',
        reverse: 'reverse',
        alternate: 'alternate',
        'alternate-reverse': 'alternate-reverse'
      },
      animationFillMode: {
        // defaults to these values
        default: 'none',
        none: 'none',
        forwards: 'forwards',
        backwards: 'backwards',
        both: 'both'
      },
      animationPlayState: {
        // defaults to these values
        running: 'running',
        paused: 'paused'
      }
    },
    variants: {
      // all the following default to ['responsive']
      transitionProperty: ['responsive'],
      transitionDuration: ['responsive'],
      transitionTimingFunction: ['responsive'],
      transitionDelay: ['responsive'],
      willChange: ['responsive'],

      animations: ['responsive'],
      animationDuration: ['responsive'],
      animationTimingFunction: ['responsive'],
      animationDelay: ['responsive'],
      animationIterationCount: ['responsive'],
      animationDirection: ['responsive'],
      animationFillMode: ['responsive'],
      animationPlayState: ['responsive']
    },
    plugins: [
      require('tailwindcss-animations')(),
      require('tailwindcss-transitions')()
    ]
  };
