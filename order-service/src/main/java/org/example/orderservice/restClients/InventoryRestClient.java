package org.example.orderservice.restClients;

import org.example.orderservice.model.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(url = "http://localhost:8081", name = "inventory-service")
public interface InventoryRestClient {
    @GetMapping("/product/all")
    List<Product> getAllProducts();
    @GetMapping("/product/find/{id}")
    Product findProductById(@PathVariable String id);
}
