import React from 'react';
import Orders from './Orders/Orders';
import User from './User';
import Reviews from './Reviews/Reviews';
import Movements from './Movements/Movements';
import Qas from './QandA/QAs';

export default function Profile(){
    return(
        <div className='grid grid-cols-3 grid-rows-4 w-full bg-semilight'>
            <sidebar className='w-1/4'>
                <User />
            </sidebar>
            <section className='space-y-2'>
                <section>
                    <h2 className='text-2xl font-medium pl-4'>Pedidos</h2>
                        <Orders />
                </section>
                <section>
                    <h2 className='text-2xl font-medium pl-4'>Reseñas</h2>
                        <Reviews />
                </section>
                <section>
                    <h2 className='text-2xl font-medium pl-4'>Movimientos</h2>
                        <Movements />
                </section>
                <section>
                    <h2 className='text-2xl font-medium pl-4'>Preguntas</h2>
                        <Qas />
                </section>
            </section>
        </div>
    )
}