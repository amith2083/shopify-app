
import React, { useState } from 'react';
import { Box, BlockStack, InlineStack, Text, Button, InlineGrid, Icon } from '@shopify/polaris';
import { PlusIcon } from '@shopify/polaris-icons';
import ImageThumbnail from './ImageThumbnail';

export default function ImageManager({ images: initialImages, onImagesChange, onEditImage }) {
  const [images, setImages] = useState(initialImages);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleAdd = () => {
    const newImages = [...images, `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&sig=${Date.now()}`];
    setImages(newImages);
    onImagesChange(newImages);
  };

  const handleRemove = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onImagesChange(newImages);
  };

  const handleDragStart = (index) => setDraggedIndex(index);

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newImages = [...images];
    const [dragged] = newImages.splice(draggedIndex, 1);
    newImages.splice(index, 0, dragged);

    setImages(newImages);
    onImagesChange(newImages);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => setDraggedIndex(null);

  return (
    <Box padding="300" background="bg-surface-secondary" borderRadius="200">
      <BlockStack gap="300">
        <InlineStack align="space-between" blockAlign="center">
          <Text as="p" variant="bodyMd" fontWeight="semibold">
            Images ({images.length})
          </Text>
          <Button size="slim" icon={PlusIcon} onClick={handleAdd}>
            Add image
          </Button>
        </InlineStack>

        {images.length > 0 && (
          <InlineGrid columns={3} gap="200">
            {images.map((img, idx) => (
              <ImageThumbnail
                key={idx}
                image={img}
                index={idx}
                onEdit={onEditImage}
                onRemove={handleRemove}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
                isDragging={draggedIndex === idx}
              />
            ))}
          </InlineGrid>
        )}
      </BlockStack>
    </Box>
  );
}