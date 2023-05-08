
export const useCounter = <T, V> ( dato : T, dato2 : V ) : T => {
  console.log( dato2 );
  return dato;
}

useCounter( 123, 'hteuoa' );
