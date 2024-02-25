package org.example.orderservice.service;

import org.example.orderservice.entity.Order;
import org.example.orderservice.repo.OrderRepo;
import org.example.orderservice.restClients.InventoryRestClient;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {
    private final OrderRepo orderRepo;
    private final InventoryRestClient inventoryRestClient;

    public OrderServiceImpl(OrderRepo orderRepo, InventoryRestClient inventoryRestClient) {
        this.orderRepo = orderRepo;
        this.inventoryRestClient = inventoryRestClient;
    }

    @Override
    public List<Order> getAll() {
        List<Order> all = orderRepo.findAll();
        all.forEach(o->{
            o.getProductItems().forEach(pi->{
                pi.setProduct(inventoryRestClient.findProductById(pi.getProductId()));
            });
        });
        return all;
    }

    @Override
    public Order getById(String id) {
        Order order = orderRepo.findById(id).get();
        order.getProductItems().forEach(pi->{
            pi.setProduct(inventoryRestClient.findProductById(pi.getProductId()));
        });
        return order;
    }
}
