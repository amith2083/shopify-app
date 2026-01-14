import React from "react";
import {
  Modal,
  BlockStack,
  Box,
  TextField,
  Text,
  ButtonGroup,
  Button,
  InlineStack,
  RangeSlider,
} from "@shopify/polaris";

export default function ImageEditModal({
  open,
  onClose,
  image,
  aiPrompt,
  setAiPrompt,
  contrast,
  setContrast,
  rotation,
  setRotation,
}) {
  const handleRotate = (deg) => setRotation((rotation + deg) % 360);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Edit Image"
      primaryAction={{ content: "Save Changes", onAction: onClose }}
      secondaryActions={[{ content: "Cancel", onAction: onClose }]}
    >
      <Modal.Section>
        <BlockStack gap="400">
          {image && (
            <Box
              background="bg-surface-secondary"
              padding="400"
              borderRadius="200"
            >
              <img
                src={image}
                alt="Editing"
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  transform: `rotate(${rotation}deg)`,
                  filter: `contrast(${contrast}%)`,
                  transition: "all 0.3s ease",
                }}
              />
            </Box>
          )}

          <TextField
            label="AI Enhancement Prompt"
            value={aiPrompt}
            onChange={setAiPrompt}
            placeholder="Describe the changes you want to make..."
            multiline={3}
            helpText="Use AI to enhance or modify your image"
          />

          <BlockStack gap="200">
            <Text variant="bodyMd" fontWeight="semibold">
              Crop
            </Text>
            <ButtonGroup>
              <Button>Original</Button>
              <Button>Square</Button>
              <Button>16:9</Button>
              <Button>4:3</Button>
              <Button>Custom</Button>
            </ButtonGroup>
          </BlockStack>

          <BlockStack gap="200">
            <Text variant="bodyMd" fontWeight="semibold">
              Rotate
            </Text>
            <InlineStack gap="200">
              <Button onClick={() => handleRotate(-90)}>↺ 90° Left</Button>
              <Button onClick={() => handleRotate(90)}>↻ 90° Right</Button>
              <Button onClick={() => handleRotate(180)}>180°</Button>
              <Button onClick={() => setRotation(0)}>Reset</Button>
            </InlineStack>
            <Text tone="subdued">Current rotation: {rotation}°</Text>
          </BlockStack>

          <RangeSlider
            label="Contrast"
            value={contrast}
            onChange={setContrast}
            min={0}
            max={200}
            output
            suffix={`${contrast}%`}
          />
        </BlockStack>
      </Modal.Section>
    </Modal>
  );
}
