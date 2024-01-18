'use client';

export const OrderControl = () => {
        return (
        <form className='flex flex-col justify-between fixed left-0 bottom-0 w-full h-[170px] bg-white p-[25px] rounded-t-2xl shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.25)]'>
            <div className='flex flex-col items-end'>
                <div>
                    총 수량: {0}개
                </div>
                <div>
                    총 가격: {0}원
                </div>
            </div>
            <button>
                주문하기
            </button>
        </form>
        )
}