
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

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

    toast({
      title: "Success",
      description: "Video uploaded successfully",
    });

    return videoData;
  } catch (error: any) {
    toast({
      title: "Error",
      description: error.message || "Failed to upload video",
      variant: "destructive",
    });
    throw error;
  }
};
