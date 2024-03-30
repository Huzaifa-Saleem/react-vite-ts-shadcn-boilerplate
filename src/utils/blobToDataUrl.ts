// ----------------------------------------------------------------------
export default async function blobToDataUrl(blob: Blob | File, base64 = false): Promise<string> {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      resolve(base64 ? dataUrl.split(';base64,')[1] : dataUrl);
    };
    reader.readAsDataURL(blob);
  });
}

// dataURL NOT base64!
export async function dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {
  const res = await fetch(dataUrl);
  const blob: Blob = await res.blob();
  const type = dataUrl.split(';base64,')[0]?.match(/data:(.*)/)?.[1];
  const filePath = dataUrl.substring('data:image/'.length, dataUrl.indexOf(';base64'));
  const file = new File([blob], `${fileName}.${filePath}`, { type });
  Object.assign(file, {
    preview: URL.createObjectURL(file),
  });
  return file;
}
