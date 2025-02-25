
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const uploadVideo = async (file: File) => {
  try {
    const fileExt = file.name.split('.').pop();
    const filePath = `${crypto.randomUUID()}.${fileExt}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('videos')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      throw uploadError;
    }

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

export const uploadAvatar = async (file: File) => {
  try {
    const fileExt = file.name.split('.').pop();
    const allowedTypes = ['jpg', 'jpeg', 'png', 'gif'];
    
    if (!allowedTypes.includes(fileExt?.toLowerCase() || '')) {
      throw new Error('Please upload an image file (jpg, jpeg, png, or gif)');
    }

    const filePath = `${crypto.randomUUID()}.${fileExt}`;

    const { data, error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      throw uploadError;
    }

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    // Update the user's profile with the new avatar URL
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ avatar_url: publicUrl })
      .eq('id', (await supabase.auth.getUser()).data.user?.id);

    if (updateError) {
      throw updateError;
    }

    toast.success("Profile picture updated successfully");
    return publicUrl;
  } catch (error: any) {
    toast.error(error.message || "Failed to upload profile picture");
    throw error;
  }
};
