/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button"
// import { useDropzone } from 'react-dropzone'
import { Input } from "./ui/input"
import { Label } from "./ui/label";
// spinner
import { Loader2 } from "lucide-react";
import { usePhotoUpload } from "@/hooks/usePhotoUpload";

export default function FileDropdown() {
  const { selectedFile, isUploading, handleFileChange, handleDrag, handleDrop, isDragging } = usePhotoUpload();
  return (
    <>
    {isUploading && (
      <div 
              className={`border-2 border-dashed rounded-lg px-6 py-16 text-center flex flex-col items-center justify-center mt-12`}
      >

        <Loader2 className="mx-auto h-5 w-5 text-secondary animate-spin" />
        <p className="text-sm text-gray-500 mt-4">Uploading...</p>
      </div>
        )}
      {!isUploading && selectedFile && (
      <div 
              className={`border-2 border-dashed rounded-lg p-6 text-center mt-12 flex flex-col items-center justify-center`}
      >
          <img
            src={selectedFile
              ? URL.createObjectURL(selectedFile)
              : '/placeholder.jpg'
            }
            alt="Preview"
            className="rounded-lg mb-4"
            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
          />
        <p className="text-sm text-gray-500">
          Selected file: {selectedFile.name}
        </p>
        </div>
      )
    }
    {!isUploading && !selectedFile && (

      <div 
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors mt-12 ${
          isDragging ? 'border-blue-500' : 'border-secondary'
        }`}
      //className="mt-12 rounded-lg border border-dashed border-muted p-8 text-center"
              onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        >
          <Input 
          id="picture" 
          type="file" 
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <Label htmlFor="picture" className="mx-auto max-w-md space-y-2 cursor-pointer">
          <UploadIcon className="mx-auto h-12 w-12 text-primary" />

          <p className="text-lg font-medium">Drag and drop files here to upload</p>
          <p className="text-muted-foreground">
            or{" "}
            <Button variant="link" className="inline-flex items-center cursor-pointer">
              <FileIcon className="mr-2 h-4 w-4" />
              Select files
            </Button>
          </p>
        </Label>
      </div>
      )}
    </>
  )
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}