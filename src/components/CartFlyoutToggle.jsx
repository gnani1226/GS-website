import { useStore } from '@nanostores/react';
import { isCartOpen } from '../store';

export default function CartButton() {
  // read the store value with the `useStore` hook
  const $isCartOpen = useStore(isCartOpen);
  // write to the imported store using `.set`
  //console.log($isCartOpen)
  return (
    <button
      onClick={() => {
        isCartOpen.set(!$isCartOpen);
      }}
    >
      Cart
    </button>
  );
}
