import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  // head: {
  //   fontFamily: 'Inter',
  //   // WebkitTapHighlightColor: theme`colors.purple.500`,
  //   // ...tw`antialiased`,
  // },
})

const GStyles = createGlobalStyle(`
   /* Below animations are for modal created using React-Modal */
     .ReactModal__Overlay {
     transition: transform 300ms ease-in-out;
     transition-delay: 100ms;
     transform: scale(0);
   }
   .ReactModal__Overlay--after-open{
     transform: scale(1);
   }
   .ReactModal__Overlay--before-close{
     transform: scale(0);
   }
   
`)

const GlobalStyles = () => (
  <>
 
    <BaseStyles />
    {/* <CustomStyles /> */}
    <GStyles />
  </>
)

export default GlobalStyles
