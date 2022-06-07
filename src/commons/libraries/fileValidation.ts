export const checkFileValidation = (file?: File) => {
    if (!file?.size) {
        alert("파일이 없습니다");
        return false;
    }

    if (file.size > 10 * 1024 * 1024) {
        alert("파일 용량이 너무 큽니다.(제한: 10MB!!)");
        return false;
    }

    if (
        !file.type.includes("jpeg") &&
        !file.type.includes("jpg") &&
        !file.type.includes("png")
    ) {
        alert("jpg, jpeg 또는 png 파일만 업로드 가능합니다!");
        return false;
    }

    return true;
};
