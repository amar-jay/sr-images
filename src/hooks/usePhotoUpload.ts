"use client";
import { ChangeEventHandler, DragEventHandler, useCallback, useEffect, useState } from "react";
export const usePhotoUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File|null>(null);
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
    const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange:ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event?.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    } else {
      alert('Please select an image file.');
    }
  };

    const handleDrag:DragEventHandler<HTMLDivElement> = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setIsDragging(true);
    } else if (event.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

    const handleDrop:DragEventHandler<HTMLDivElement> = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    } else {
      alert('Please drop an image file.');
    }
  }, []);

	useEffect(() => {
    const handleUpload = () => {
      setIsUploading(true);
      // Simulate a file upload
      try{
    if (selectedFile) {
      // Here you would typically handle the file upload to your server
      console.log('Uploading file:', selectedFile.name);
      // save the file to local storage
      localStorage.setItem('file', selectedFile.name);
      localStorage.setItem('fileType', selectedFile.type);  
      localStorage.setItem('fileSize', selectedFile.size.toString());
      // Convert the image file to a data URL (base64) and save it to localStorage
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        setPreview(imageDataUrl);
        if (typeof imageDataUrl === 'string')
          localStorage.setItem('lowResolutionImage', imageDataUrl); // Save the image to localStorage
        else
          console.error('The image could not be converted to a data URL');
      };
      reader.readAsDataURL(selectedFile);
    } else {
      console.log('No file selected');
    }
      } catch (error) {
        console.error('An error occurred during file upload:', error);
      } finally {
        setIsUploading(false);
      }
	};
	handleUpload();
		
	}, [selectedFile]);

  return {
	selectedFile,
	preview,
	isUploading,
	isDragging,
	handleFileChange,
	handleDrag,
	handleDrop,

  }
}