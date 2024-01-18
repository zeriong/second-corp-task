import {
    selector, selectorFamily,
} from 'recoil';
import {ordersState, TItem} from "@/store/order/order.atoms";

// 주문 수량 조절로 주문목록을 작성
export const orderQuantityState = selectorFamily({
    key: 'orderQuantity',
    get: (item: TItem) => ({ get }) => {
        const orders = get(ordersState);
        const order = orders.find((order) => order.itemId === item.id);

        return order ? order.quantity : 0;
    },
    set: (item: TItem) => ({ set, get }, addQuantity: any)=> {
        set(ordersState, prevOrders => {
            const orderIndex = prevOrders.findIndex(order => order.itemId === item.id);

            if (orderIndex !== -1) {
                const updatedOrder = { ...prevOrders[orderIndex] };
                // 수량 제한
                updatedOrder.quantity = Math.max(0, Math.min(999, updatedOrder.quantity + addQuantity));

                if (updatedOrder.quantity === 0) {
                    // 수량이 0이면 항목 제거
                    return prevOrders.filter((_, index) => index !== orderIndex);
                } else {
                    // 수량 업데이트
                    return prevOrders.map((order, index) => index === orderIndex ? updatedOrder : order);
                }
            } else if (addQuantity > 0) {
                // 새 상품 추가
                return [...prevOrders, { itemId: item.id, price: item.price, quantity: addQuantity }];
            }

            return prevOrders;
        });
    }
})

// 주문 목록의 합계 반환
export const totalOrderState = selector({
    key: 'totalOrder',
    get: ({ get }) => {
        const orders = get(ordersState);
        let totalQuantity = 0;
        let totalPrice = 0;

        orders.forEach(order => {
            totalQuantity += order.quantity;
            totalPrice += order.quantity * order.price;
        });

        return {
            totalQuantity,
            totalPrice,
            orders
        };
    }
});
