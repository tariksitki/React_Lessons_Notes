import React from 'react'
import { ProductProvider } from './ProductContext';
import ProductList from './ProductList';

//  Not: Bir Provider olusturduk. kullanacagimiz bütün func lari state leri vs leri bunun icine attik. ve daha sonra bu provider a diger component lrin erisebilmesi icin o componentleri bununla sarmaladik. yani diyoruz ki sizi bununla sarmaladim siz buna erisebilirsiniz.

const withContextApp = () => {
  return (
    <div>
        <ProductProvider>
            <ProductList />
            {/* Burada ProductList children dir */}
        </ProductProvider>
    </div>
  )
}

export default withContextApp;