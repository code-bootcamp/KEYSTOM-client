// 파일 업로드 검증
export const checkFileValidation = (file?: File) => {
  // 파일이 없다면 튕겨낸다 ( file ? )

  // 파일이 없다면?
  if (!file?.size) {
    alert("파일이 없습니다!");
    return false;
  }

  // 파일 사이즈 제한
  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다. (제한 : 5MB!)");
    return false;
  }

  // 파일 확장자 제한!
  if (!file.type.includes("jpeg") && file.type.includes("png")) {
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다!");
    return false;
  }
  return true;
};
