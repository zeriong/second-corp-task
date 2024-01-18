// 숫자 3자리마다 "," 콤마 넣기
export const numberSeparator = (num: number): string => {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

// sleep 을 통한 지연 연출
export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}