
import CartContextProvider from "../context/cart.context"


export default function CartWrapper({children}:{children:React.ReactNode}){
    return <CartContextProvider>{children}</CartContextProvider>
}




