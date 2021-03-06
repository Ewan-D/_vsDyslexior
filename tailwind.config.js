module.exports = {
  purge: {
	content: [ './dist/**/*.html' ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Merriweather', "serif"]
    },
    extend: {
      boxShadow: {
        'site': '2px 2px #E75A7C',
      },
    },

  },

  variants: {

  },
  plugins: [],
}
