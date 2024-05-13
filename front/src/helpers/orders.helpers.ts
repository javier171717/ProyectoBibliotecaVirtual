// orders.helpers.ts
export const getOrders = async (userId: number) => {
    try {
      const response = await fetch(`/orders?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Error fetching orders');
      }
      const data = await response.json();
      return data.orders;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  };
  