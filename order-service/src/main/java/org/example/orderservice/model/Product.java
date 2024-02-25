package org.example.orderservice.model;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @ToString
public class Product {
    private String id;
    private String name;
    private double price;
    private int quantity;
}
