export const imageUploader = async (imageFile: any) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    // Make a POST request to ImgBB's upload API using fetch
    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=9eb0a6cef5e954da1dc6afdfc4390599",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Image upload failed");
    }

    const responseData = await response.json();

    // Return the ImgBB response
    return responseData.data;
  } catch (error) {
    console.error("Error uploading image to ImgBB:", error);
    throw error;
  }
};
