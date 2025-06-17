import Link from 'next/link';
import React from 'react';

function ProductsDetails() {

    return (
        <div className="px-6 py-6 space-y-6">
            <div className="text-left text-sm text-black px-5"> <Link className='font-bold' href="/">Inicio</Link> {'>'} <Link href="/shop/products">Catálogo</Link></div>
        </div>
    )

}

export default ProductsDetails;