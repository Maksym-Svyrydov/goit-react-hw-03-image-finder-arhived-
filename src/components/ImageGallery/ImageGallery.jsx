import { ImageItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <ImageItem key={image.id} webformatURL={image.webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
