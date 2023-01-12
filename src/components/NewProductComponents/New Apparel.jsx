import { useState } from 'react';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';
import './NewCoffee.scss';
import utils from '../../utils';
import productApi from '../../api/productApi';

function NewApparel(props) {
  const [apparel, setApparel] = useState({
    type: 'apparel',
    name: '',
    author: '',
    price: '',
    description: '',
  });
  const [imageProduct, setImageProduct] = useState('');
  const [previewImageURL, setPreviewImageURL] = useState('');

  const handleChangeField = (e) => {
    setApparel({
      ...apparel,
      [e.target.id]: e.target.value,
    });
  };

  const handleAddImage = async (e) => {
    let data = e.target.files;
    let file = data[0];

    if (file) {
      let base64 = await utils.getBase64(file);
      let objectUrl = URL.createObjectURL(file);
      setPreviewImageURL(objectUrl);
      setImageProduct(base64);
    }
  };

  const handleSubmitForm = async () => {
    const result = await productApi.createProduct({
      ...apparel,
      image: imageProduct,
    });

    if (result.data.errCode === 0) {
      setApparel({
        type: 'apparel',
        name: '',
        author: '',
        price: '',
        description: '',
      });
      setPreviewImageURL('');
    }
  };

  return (
    <div>
      <Header />
      <h3>New Coffee Product</h3>
      <div className="container new-coffee__content">
        <div className="new-coffee__image">
          <label
            htmlFor="new-coffee"
            style={{ backgroundImage: `url(${previewImageURL})` }}
          >
            <span>{previewImageURL ? '' : 'Add Coffee Image'}</span>
          </label>
          <input
            id="new-coffee"
            type="file"
            hidden
            onChange={(e) => handleAddImage(e)}
          />
        </div>
        <div>
          <div className="new-coffee__all-field">
            <div className="new-coffee__field">
              <span>Name</span>
              <input
                id="name"
                type="text"
                placeholder="Product Name ..."
                value={apparel.name}
                onChange={(e) => handleChangeField(e)}
              />
            </div>
            <div className="new-coffee__field">
              <span>Author</span>
              <input
                id="author"
                type="text"
                placeholder="Product Author ..."
                value={apparel.author}
                onChange={(e) => handleChangeField(e)}
              />
            </div>
            <div className="new-coffee__field">
              <span>Price</span>
              <input
                id="price"
                type="number"
                placeholder="Product Price ..."
                value={apparel.price}
                onChange={(e) => handleChangeField(e)}
              />
            </div>
          </div>
          <div className="new-coffee__field new-coffee__field-description">
            <span>Description</span>
            <textarea
              name="description"
              id="description"
              rows="10"
              placeholder="Product Description ..."
              value={apparel.description}
              onChange={(e) => handleChangeField(e)}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="container new-coffee__submit-btn">
        <button className="btn submit-btn" onClick={handleSubmitForm}>
          <span>Submit</span>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default NewApparel;
