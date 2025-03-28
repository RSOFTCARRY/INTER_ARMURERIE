// import { listUsersExample } from '@/api/auth'
// import { useQuery } from '@tanstack/react-query'
// import React, { useEffect } from 'react'

// export default function Home() {
//   const { isPending, isError, data, error } = useQuery({ queryKey: ['listUser'], queryFn: listUsersExample })

//   useEffect(()=>{
//     console.log("DATA", data)
//   }, [data])
  
//   return (
//     <div className='px-20 py-5'>
//       <h2 className='text-xl'>Liste d'utilisateurs</h2>
//       <ol className='flex gap-4 flex-col mt-10'>
//         {data?.length > 0 && data.map((user)=>{
//           return (<li key={user.id}>{user?.name}</li>)
//         })}
//       </ol>
//   </div>
//   )
// }

import React from 'react';
import republique from "../../public/images/ak-47-bois.jpg"
import republique_staff from "../../public/images/ar15-Stand-de-tir-1.jpg"

const HomeGuest = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      <div className="w-full">
        <img
          src={republique}
          alt="Restaurant Le République"
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>


      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-6">
          <h1><b>Inter Armurerie – La plateforme dédiée aux professionnels de l’armurerie</b></h1>
          <p className="text-black rounded-md p-2 text-l/6">
              <b> <i>Inter Armurerie </i> </b> est une plateforme conçue pour faciliter la mise en relation entre <b>professionnels de la vente d’armes, d’éléments d’armes et de munitions.</b> Notre mission est de simplifier l’accès aux stocks en connectant les armureries entre elles.
            </p>
            <p className="text-black rounded-md p-2 text-l/6">
            Grâce à notre service, <b>les armuriers peuvent consulter et réserver des articles disponibles</b> en quelques clics, optimisant ainsi leur approvisionnement tout en soutenant les commerçants partenaires.
            </p>
            
            <p className="text-black rounded-md p-2 text-l/6">
            <b>Vous êtes armurier ?</b> Rejoignez-nous dès aujourd’hui et bénéficiez d’un accès privilégié aux stocks des professionnels du secteur.
            </p>

            <p className="text-black rounded-md p-2 text-l/6">
            <b>Pourquoi rejoindre Inter Armurerie ? </b>
            
             Accédez à un vaste réseau d’armureries et de distributeurs spécialisés pour échanger et trouver les articles dont vous avez besoin.

            </p>

            <p className="text-black rounded-md p-2 text-l/6">
            <b>Un gain de temps et d’efficacité</b> Consultez en un clin d’œil les stocks disponibles, réservez des articles en toute simplicité et évitez les ruptures d’approvisionnement.

            </p>

            <p className="text-black rounded-md p-2 text-l/6">
            <b>Une mise en relation sécurisée</b> Nous offrons un espace fiable et professionnel pour faciliter les transactions entre commerçants, en toute transparence et conformité.

            </p>

            <p className="text-black rounded-md p-2 text-l/6">
            <b>Un soutien aux acteurs du secteur</b> En utilisant Inter Armurerie, vous participez à une dynamique collective qui valorise et soutient les professionnels de l’armurerie.

            </p>
            
            <p className="text-black rounded-md p-2 text-l/6">
            <b>Rejoignez-nous dès aujourd’hui et profitez de tous les avantages d’Inter Armurerie !</b>
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={republique_staff}
              alt="Solidarité"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#0c422f]">Rejoignez nous !</h2>
          <p className="mt-4 text-lg">
          <b>Besoin d’informations ?</b> Contactez-nous dès maintenant !
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-[#0c422f] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#346c59]"
          >
            Nous contacter
          </a>
        </section>
      </main>
    </div>
  );
};

export default HomeGuest;
