package org.example.inventoryservice;

import org.example.inventoryservice.entity.Product;
import org.example.inventoryservice.repo.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@SpringBootApplication
public class InventoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(ProductRepository productRepository) {
		return args -> {
			List<Product> products = Arrays.asList(
					Product.builder()
							.id(UUID.randomUUID().toString())
							.name("Phone")
							.price(4800)
							.quantity(1)
							.build(),
					Product.builder()
							.id(UUID.randomUUID().toString())
							.name("Computer")
							.price(5000)
							.quantity(2)
							.build(),
					Product.builder()
							.id(UUID.randomUUID().toString())
							.name("Printer")
							.price(500)
							.quantity(14)
							.build()
			);

			productRepository.saveAll(products);
		};
	}

}