import React from 'react';


const PentestingSection = () => {
    const pentest1 = 'https://www.shutterstock.com/image-photo/happy-puppy-welsh-corgi-14-600nw-2270841247.jpg'
    const pentest2 = 'https://www.pawlovetreats.com/cdn/shop/articles/pembroke-welsh-corgi-puppy_1000x.jpg?v=1628638716'
    const pentest3 = 'https://hips.hearstapps.com/goodhousekeeping/assets/17/30/pembroke-welsh-corgi.jpg'
  return (
    <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-pink-500 md:text-pink-600 lg:text-pink-700 xl:text-pink-800">
        Pentesting Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img src={pentest1} alt="Pentest 1" className="w-full h-auto rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">Pentest 1</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur magni aperiam! Omnis esse beatae, sit obcaecati, consequuntur facilis sequi ratione enim blanditiis quis velit illo, voluptatibus hic repellendus provident.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img src={pentest2} alt="Pentest 2" className="w-full h-auto rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">Pentest 2</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, provident. Modi, minus! Consequatur laboriosam quas magnam repudiandae aliquid culpa ratione atque! Nemo, enim. Harum, recusandae corrupti tenetur doloribus inventore vel!</p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img src={pentest3} alt="Pentest 3" className="w-full h-auto rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">Pentest 3</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquid ipsum tempore maxime assumenda sint aut mollitia quibusdam, eos consequuntur natus facilis totam blanditiis exercitationem tenetur suscipit? Similique, neque praesentium!</p>
          </div>
        </div>
        {/* Add more pentest items as needed */}
      </div>
    </div>
  </section>
  );
};

export default PentestingSection;
