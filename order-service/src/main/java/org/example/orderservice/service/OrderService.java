package org.example.orderservice.service;

import org.example.orderservice.entity.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAll();

    Order getById(String id);
}
