import { useState } from 'react';
import { formatFileSize } from '@/utils/other';
export default function useFileUploader(showPreview = true) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleAcceptedFiles = (files, callback) => {
    let allFiles = [];
    if (showPreview) {
      files = files.map(file => {
        return {
          ...file,
          preview: file['type']?.split('/')[0] === 'image' ? URL.createObjectURL(file) : undefined,
          formattedSize: formatFileSize(file.size)
        };
      });
      allFiles = [...selectedFiles, ...files];
      setSelectedFiles(allFiles);
    }
    if (callback) callback(allFiles);
  };
  const removeFile = file => {
    const newFiles = [...selectedFiles];
    newFiles?.splice(newFiles.indexOf(file), 1);
    setSelectedFiles(newFiles);
  };
  return {
    selectedFiles,
    handleAcceptedFiles,
    removeFile
  };
}