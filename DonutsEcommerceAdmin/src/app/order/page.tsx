"use client";

/**
 * Order Management Component
 * Displays and manages customer orders with expandable details for products and order status
 */
import { constants } from "@/app/_constants/constants";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Modal, Table, TableColumnType } from "antd";
import { useFetchData } from "../_components/hooks/useFetchData";
import { CustomerOrder, OrderData, Product } from "./types";
import { useState } from "react";
import axiosInstance from "../_components/utils/axiosInstance";
import { usePostData } from "../_components/hooks/useMutationData";
import { mutate } from "swr";

export default function Order() {
  // Mutation hook for updating order status
  const { isMutating, mutatePost } = usePostData(constants.order);

  // Fetch customer order data
  const { data: customerData } = useFetchData<CustomerOrder[]>(
    constants.customer
  );

  // State management for order status modal
  const [selectedValue, setSelectedValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderId, setOrderId] = useState(0);

  // Main table columns for customer information
  const columns: TableColumnType<CustomerOrder>[] = [
    { title: "First Name", dataIndex: "first_name", key: "first_name" },
    { title: "Last Name", dataIndex: "last_name", key: "last_name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "City", dataIndex: "city", key: "city" },
  ];

  /**
   * Handles the confirmation of order status update
   */
  const isHandleOk = async () => {
    await mutatePost({
      data: { id: orderId, status: selectedValue } as never,
      method: "PATCH",
    } as never);
    setIsModalOpen(false);
    setSelectedValue("");
    mutate(constants.customer);
  };

  /**
   * Handles the cancellation of order status modal
   */
  const isHandleCancel = () => {
    setIsModalOpen(false);
    setSelectedValue("");
  };

  /**
   * Opens the modal for editing order status
   * @param record - The order data to be edited
   */
  const showSliderModal = (record: OrderData) => {
    setSelectedValue(record.status);
    setOrderId(record.id);
    setIsModalOpen(true);
  };

  // Columns for the expandable order details table
  const expandableColumn: TableColumnType<OrderData>[] = [
    { title: "Order Date", dataIndex: "order_date", key: "order_date" },
    { title: "Total Amount", dataIndex: "total_amount", key: "total_amount" },
    { title: "Order Status", dataIndex: "status", key: "order_status" },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div className="flex gap-3">
          <Button
            icon={<PlusOutlined />}
            onClick={() => showSliderModal(record)}
          >
            Edit Order Status
          </Button>
        </div>
      ),
    },
  ];

  // Columns for the nested product details table
  const nestedExpandedColumn: TableColumnType<Product>[] = [
    { title: "Product Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Quantity",
      key: "quantity",
      render: (_, record) => record.OrderProduct.quantity,
    },
  ];

  /**
   * Renders the nested table showing product details for each order
   */
  const nestedExpandedRowRender = (record: OrderData) => (
    <Table
      columns={nestedExpandedColumn}
      dataSource={record.product}
      pagination={false}
      rowKey={(record) => record.id}
    />
  );

  /**
   * Renders the expandable row showing order details for each customer
   */
  const expandedRowRender = (record: CustomerOrder) => (
    <Table
      columns={expandableColumn}
      expandable={{
        expandedRowRender: nestedExpandedRowRender,
      }}
      dataSource={record.order}
      pagination={false}
      rowKey={(record) => record.id}
    />
  );

  /**
   * Handles the change of order status in the modal
   */
  const onChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold ">Order</h1>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
        }}
        dataSource={customerData}
        rowKey={(record) => record.id}
      />
      <Modal
        title="Edit Order Status"
        open={isModalOpen}
        onOk={isHandleOk}
        onCancel={isHandleCancel}
      >
        <Select
          style={{ width: 300 }}
          placeholder="Select Order Status"
          value={selectedValue}
          onChange={onChange}
          options={[
            { value: "", label: "Select Order Status " },
            { value: "pending", label: "pending" },
            { value: "cancelled", label: "cancelled" },
            { value: "shipped", label: "shipped" },
            { value: "completed", label: "completed" },
          ]}
        />
      </Modal>
    </div>
  );
}
