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
      const url = new URL('https://nationsound.fr//wp-json/wc/v3/products?_embed');
      url.searchParams.append('consumer_key', 'ck_ababe02034847184279c83aa93edfd56d71e96f7');
      url.searchParams.append('consumer_secret', 'cs_89fd1c87f49fbb998b821b009ac93c93b42419cc');
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

  

  return (
    <div className="cards-container">
      <div className="row">
        {produits.map((produit, index) => {
          if (["PASS 1 JOUR", "PASS 2 JOURS", "PASS 3 JOURS"].includes(produit.name)) {
            return null;
          }

          const image = produit.images.length > 0 ? produit.images[0].src : '';

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
                    src={image}
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
                  <h2 className="pt-5">{selectedProduct?.name}</h2>
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
