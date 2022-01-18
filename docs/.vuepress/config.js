module.exports = {
    title: 'USECAD',
    description: 'Página principal',
    themeConfig: {
      nav: [
        { text: 'Inicio', link: '/' },
        { text: 'Guía', link: '/guia/' },
        { text: 'SSA', link: 'https://www.ssa.ingenieria.unam.mx/' }
      ],
      sidebar:{
        '/guia/':[
          '',
          'Manual Básico Gamma.md'
        ]        
      }
    }
  }