"use server";

// const img_hosting_token = import.meta.env.IMG_API_KEY;

export const imageUpload = async (data: any) => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=9eb0a6cef5e954da1dc6afdfc4390599`;
  //   const formData = new FormData();
  //   formData.append("image", data.image[0]);
  const res = await fetch(img_hosting_url, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((imgRes) => {
      // console.log(imgRes);
      if (imgRes.success) {
        const imgURL = imgRes.data.display_url;

        return imgURL;
      }
    });
  return res;
};
