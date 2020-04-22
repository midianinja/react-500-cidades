export const getBase64 = (file) => {
  const reader = new FileReader();
  const promise = new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onload = () => {
          resolve(reader.result);
      };
      reader.onerror = (error) => {
          reject(error);
      };
  });
  return promise;
};