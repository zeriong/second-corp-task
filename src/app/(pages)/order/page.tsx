import {API_URL} from "@/constants";
import {OrderListItem} from "@/components/ui/order/OrderListItem";

export default async function OrderPage() {
    const items = await fetch(`${API_URL}/items`, {
        // 잦은 업데이트가 불필요한 데이터로 판단하여 10분 캐시
        //next: { revalidate: 60 * 10 }
        // 로딩 연출이 필요하다면 캐시 제한
        cache: 'no-store'
    }).then((data) => data.json());

    console.log('오더 페이지:', items?.length)

    return (
        <ul className='flex flex-col gap-[18px] py-[18px] px-[25px]'>
            {items?.length > 0 ?
                items.map((item: any, idx: number) => (
                    <OrderListItem key={idx} item={item}/>
                )) : (
                    <div className="w-full h-[320px] flex items-center justify-center">
                        상품이 존재하지 않습니다.
                    </div>
                )
            }
        </ul>
    )
}