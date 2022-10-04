import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/favicon.png" />
            <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"/>
       
            <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/animate.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css"/>
        
            <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css"/>
          
            <link rel="stylesheet" href="/assets/css/rsmenu-main.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/style.css"/>
            
            <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/bg.css"/>

            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      
        </Head>
        <body>
          <Main />
          <NextScript /> 
         
            <script src="/assets/js/jquery.min.js"></script>            
            <script src="/assets/js/owl.carousel.min.js"></script>        
            <script src="/assets/js/wow.min.js"></script>             
            <script src="/assets/js/main.js"></script>     

        </body>
      </Html>
    )
  }
}

export default MyDocument