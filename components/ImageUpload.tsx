"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";
import toast from "react-hot-toast";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "postImage";
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative size-40">
        <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        if (res?.[0].ufsUrl) {
          onChange(res[0].ufsUrl);
          toast.success("Image uploaded successfully");
        }
      }}
      onUploadError={(error: Error) => {
        console.error("Upload error:", error);
        toast.error("Image upload failed. Please try again");
      }}
      appearance={{
        button: "ut-ready:bg-primary ut-uploading:bg-primary/50 text-primary-foreground text-sm font-medium px-4 py-2 rounded-md",
        container: "border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 cursor-pointer hover:border-primary/50 transition-colors",
        label: "text-foreground font-medium",
        allowedContent: "text-muted-foreground text-xs",
        uploadIcon: "text-muted-foreground",
      }}
    />
  );
}

export default ImageUpload;