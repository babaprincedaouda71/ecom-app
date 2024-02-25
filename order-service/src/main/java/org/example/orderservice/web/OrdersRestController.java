package org.example.orderservice.web;
import org.example.orderservice.entity.Order;
import org.example.orderservice.service.OrderService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrdersRestController {
    private final OrderService orderService;

    public OrdersRestController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/all")
    public List<Order> findAllOrders(){
        return orderService.getAll();
    }
    @GetMapping("/find/{id}")
    public Order findOrderById(@PathVariable String id){
        return orderService.getById(id);
    }
}
