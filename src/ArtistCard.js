import React, { useEffect, useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';

function ArtistCard() {
  const [produits, setProduits] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (produits.length === 0) {
      const url = new URL('https://promptia.fr/wp-json/wc/v3/products?_embed');
      url.searchParams.append('consumer_key', 'ck_e2c7c141b576494392f0d84d83daa63d792b71ff');
      url.searchParams.append('consumer_secret', 'cs_b5f92310248c73aaf7a70782cbb32ed19b761c0e');
      url.searchParams.append('per_page', 100);
      url.searchParams.append('page', 1);

      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data) {
            setProduits(data);
          }
        })
        .catch(error => console.error('Erreur:', error));
    }
  }, [produits]);

  const isWebPSupported = () => {
    const elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  };

  return (
    <div className="cards-container">
      <div className="row">
        {produits.map((produit, index) => {
          if (["PASS 1 JOUR", "PASS 2 JOURS", "PASS 3 JOURS"].includes(produit.name)) {
            return null;
          }

          const image = produit.images.length > 0 ? produit.images[0].src : '';
          const imageUrlWebP = `${image}.webp`;

          const supportsWebP = isWebPSupported();
          const imageUrlToDisplay = supportsWebP ? imageUrlWebP : image;

          const customStyles = {
            overlay: {
              backgroundColor: '#14213D'
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#fff',
              borderRadius: '4px',
              padding: '20px',
              width: '80%',
              height: '80%',
              maxWidth: '1100px',
              maxHeight: '500px',
              overflow: 'auto'
            }
          };

          return (
            <div key={index} className="col-md-6 mb-5 d-flex">
              <div className="artist-card bgWhite p-4 rounded-3 shadow-lg d-flex flex-column " style={{ border: '1px solid #ccc', height: '100%' }}>
                <div className="row">
                  <div className="col-12 col-md-5">
                    <img
                      src={imageUrlToDisplay}
                      alt={produit.name}
                      className="img-fluid"
                      width="300"
                      height="200"
                    />
                  </div>
                  <div className="col-12 col-md-7">
                    <h3 className='blue'>{produit.name}</h3>
                    <p className="fw-bold">{produit.tags && produit.tags.length > 0 ? produit.tags.map(tag => tag.name).join(', ') : 'Non spécifié'}</p>
                    <button onClick={() => openModal(produit)} className="">Voir +</button>
                  </div>
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                  <h2 className="">{selectedProduct?.name}</h2>
                  <img
                    src={selectedProduct?.images[0].src}
                    alt={selectedProduct?.name}
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <p dangerouslySetInnerHTML={{ __html: selectedProduct?.short_description }}></p>
                  <p dangerouslySetInnerHTML={{ __html: selectedProduct?.description }}></p>
                  <p className="fw-bold">{selectedProduct?.tags && selectedProduct?.tags.length > 0 ? selectedProduct?.tags.map(tag => tag.name).join(', ') : 'Non spécifié'}</p>
                  <button onClick={closeModal}>Fermer</button>
                </Modal>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArtistCard;
