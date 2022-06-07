// 날짜 표기 (2022-01-01)
export const getDate = (date: any) => {
    const today = new Date(date);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
};
