
import React from 'react';
import { Box, Button, Icon } from '@shopify/polaris';
import { DragHandleIcon, EditIcon, DeleteIcon } from '@shopify/polaris-icons';

export default function ImageThumbnail({
  image,
  index,
  onEdit,
  onRemove,
  onDragStart,
  onDragOver,
  onDragEnd,
  isDragging,
}) {
  return (
    <Box
      draggable
      onDragStart={() => onDragStart(index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDragEnd={onDragEnd}
      style={{ cursor: 'grab', position: 'relative', opacity: isDragging ? 0.5 : 1 }}
    >
      <Box position="relative">
        <img
          src={image}
          alt={`Thumbnail ${index + 1}`}
          style={{
            width: '100%',
            height: '80px',
            objectFit: 'cover',
            borderRadius: '6px',
            border: '1px solid #E5E7EB',
          }}
        />

        <Box style={{ position: 'absolute', top: '4px', right: '4px' }}>
          <Button size="micro" icon={DragHandleIcon} variant="primary" tone="critical" style={{ cursor: 'grab' }} />
        </Box>

        <Box style={{ position: 'absolute', bottom: '10px', left: '4px', right: '4px', display: 'flex', gap: '20px' }}>
          <Button size="micro" icon={EditIcon} onClick={() => onEdit(index)} variant="primary" />
          <Button size="micro" icon={DeleteIcon} onClick={() => onRemove(index)} variant="primary" tone="critical" />
        </Box>
      </Box>
    </Box>
  );
}