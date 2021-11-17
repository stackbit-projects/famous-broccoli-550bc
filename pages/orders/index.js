import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from '../../components/layouts/MainLayouts/MainLayout';
import OrdersPageLayout from '../../components/layouts/PageLayouts/OrdersPageLayout';
import { refreshPage } from '../../store/feature/authSlice';

const Orders = () => {
    const dispatch = useDispatch();
    useEffect(() => {
		dispatch(
			refreshPage({
				key: localStorage.getItem("refresh_key"),
			})
		);
    }, [dispatch]);
    return (
        <MainLayout>
            <OrdersPageLayout/>
         </MainLayout>

    );
};

export default Orders;