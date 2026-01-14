
import React, { useState } from 'react';
import {
  Card,
  BlockStack,
  Text,
  Box,
} from '@shopify/polaris';

import ProductImageSection from './ProductImageSection';
import ProductTags from './ProductTags';
import OutOfStockNotification from './OutOfStockNotification';
import ImageManager from './ImageManager';
import ImageEditModal from './ImageEditModal';

export default function ProductCard({ product: initialProduct }) {
  const [product, setProduct] = useState(initialProduct);
  const [images, setImages] = useState(initialProduct.images);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState(null);
  const [aiPrompt, setAiPrompt] = useState('');
  const [contrast, setContrast] = useState(50);
  const [rotation, setRotation] = useState(0);

  const handleImagesChange = (newImages) => setImages(newImages);
  const handleEditImage = (index) => {
    setEditingImage(images[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingImage(null);
    setAiPrompt('');
    setContrast(50);
    setRotation(0);
  };

  return (
    <>
      <Card>
        <BlockStack gap="400">
          <ProductImageSection
            image={images[0] || null}
            title={product.title}
            inStock={product.inStock}
          />

          <Text as="h3" variant="headingMd" fontWeight="semibold">
            {product.title}
          </Text>

          <Text
            as="p"
            variant="headingLg"
            fontWeight="bold"
            tone={product.inStock ? undefined : 'subdued'}
          >
            ${product.price.toFixed(2)}
          </Text>

          <ProductTags tags={product.tags} />

          {!product.inStock && product.outOfStockConfig && (
            <OutOfStockNotification config={product.outOfStockConfig} productTitle={product.title} />
          )}

          {product.inStock && (
            <ImageManager
              images={images}
              onImagesChange={handleImagesChange}
              onEditImage={handleEditImage}
            />
          )}
        </BlockStack>
      </Card>

      <ImageEditModal
        open={modalOpen}
        onClose={closeModal}
        image={editingImage}
        aiPrompt={aiPrompt}
        setAiPrompt={setAiPrompt}
        contrast={contrast}
        setContrast={setContrast}
        rotation={rotation}
        setRotation={setRotation}
      />
    </>
  );
}