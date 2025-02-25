
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const uploadVideo = async (file: File) => {
  try {
    const fileExt = file.name.split('.').pop();
    const filePath = `${crypto.randomUUID()}.${fileExt}`;

    // Upload file to storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('videos')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      throw uploadError;
    }

    // Insert video metadata into database
    const { data: videoData, error: insertError } = await supabase
      .from('videos')
      .insert({
        title: file.name,
        video_path: filePath,
      })
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    toast.success("Video uploaded successfully");
    return videoData;
  } catch (error: any) {
    toast.error(error.message || "Failed to upload video");
    throw error;
  }
};

export const uploadFile = async (file: File) => {
  try {
    const fileExt = file.name.split('.').pop();
    // Check if file extension is allowed
    const allowedExtensions = ['tsx', 'ts', 'jsx', 'js', 'pdf', 'doc', 'docx'];
    
    if (!allowedExtensions.includes(fileExt?.toLowerCase() || '')) {
      throw new Error(`File type .${fileExt} is not supported`);
    }

    const filePath = `${crypto.randomUUID()}.${fileExt}`;

    const { data, error: uploadError } = await supabase.storage
      .from('files')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      throw uploadError;
    }

    toast.success("File uploaded successfully");
    return { filePath, fileName: file.name };
  } catch (error: any) {
    toast.error(error.message || "Failed to upload file");
    throw error;
  }
};
